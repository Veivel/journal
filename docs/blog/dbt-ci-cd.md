---
title: How we run DBT on our CI/CD
lastUpdated: 2026-01-26 00:00
categories: tech
published: true
---

## Background

Data professionals today [love](https://datatalks.club/blog/how-do-data-professionals-use-data-engineering-tools-and-practices.html#:~:text=or%20manual%20solutions.-,dbt,-%3A%20Leads%20at) dbt. Short for Data Build Tool, it is a tool that simplifies data transformation by using a SQL-first approach rather than relying on complex scripts or manual DAGs. This is a shift from a traditionally procedural approach to a declarative approach.

This allows data teams to move faster by enabling data practitioners – not just data engineers, but also data analysts – by turning data transformation from an engineering task to a data modeling task. 

Do you know what everyone loves more than dbt, though?

Automation.

In our team, dbt is embedded into our development and deployment process. However, integrating dbt into automated deployment may not be easy due to long build times and environment-specific data errors causing **slow feedback loops for the team**. 

For a fast-paced startup, this is especially a problem. Imagine waiting 80 minutes for your new data model to be built and deployed, only for GitHub Actions to spew out an error from a failed unit test caused by upstream data in production. This was the exact problem our team was facing: scaling bottlenecks. 

As our data warehouse scaled, our data models increased in quantity while our data size grew in volume. Our CI/CD (Continuous Integration / Continuous Delivery) pipeline went from taking 20 minutes, to 40, to 60, and then before we realized it became 2 hours. I decided to take initiative and fix this.

## Existing Design

We had three workflows on GitHub Actions: one for PRs, one for deployment to dev, and one for deployment to prod. Each workflow was simple:

- **PR (pull request)**: Run linter and CI before merging

- **Dev**: Run CI then deliver to dev environment

- **Prod**: Run CI then deliver to prod environment

Functionally, this worked, but it had its problems. I identified the key issues we wanted to solve:

1. **Lack of traceability**

    We had two big jobs in each GitHub Actions workflow: the 'dbt build' job and the 'deliver to environment' job. If any single step failed, it was unclear why until we dove into the log noodles.

2. **CI/CD pipeline takes too long**

    When the pipeline takes too long, it fails to return feedback to the team in a timely manner. This means fixes and corrections take longer to deliver, and the pipeline for said fixes will also take equally long.

3. **Image for AWS Batch gets updated even if CI/CD returns an error**

    We run routine dbt builds daily on AWS Batch through a docker container. If an image with flawed data models gets run in production, it may cause errors, or even worse: data loss.

4. **Many steps are redundant**

    In all of our workflows, we rebuild all data models and rerun our SQL linter/formatter for all files in CI/CD, which is redundant for files and data models that remain unchanged.

## Solution

After the key issues were laid down, I spent two days researching how I should approach this problem, finding references, and looking for alternative solutions outside the CI/CD pipeline – who knows, maybe the problem wasn't the CI/CD but rather the way we did our dbt modeling. I then consulted our Head of Data. 

In the end, this is what we had planned:

![diagram showing 3 ci/cd workflows](/assets/dbt/dbt-1-bg.png)

The flow didn't change too drastically, as I had built this on top of the existing CI/CD pipeline. What mattered more, however, was **the implementation**. There were a few changes that I made:

1. **Run linter only in PR**; remove sqlfluff linter in dev and prod workflows as they are redundant steps

2. **Run linter only on SQL files that were added or modified**; do not run linter on unchanged files as they are redundant

3. **Separate `dbt build` and `dbt test` into two separate jobs** in each workflow to increase traceability.

4. **Implement slim CI using a manifest for dbt jobs**; i.e. only run dbt on data models that were added or modified (and their upstream / downstream, where relevant) to remove redundant dbt builds.

5. **CD runs *after* CI, rather than running simultaneously**; don't deliver to environment if CI fails, to prevent issues in prod.

If you're looking for the full GitHub Workflows scripts, I've omitted them out of the blog and left them here instead: https://gist.github.com/Veivel/d63d7382fbb1106b6d7b07c697cc381a

## Impact

I monitored the workflows' performance metrics on GitHub Actions. Three months after this project came into effect, we had the following metrics:

- Average run time across all workflows decreased by 40%, from ~55 minutes down to ~33 minutes.

- Job failure rate across all workflows decreased from 30% to 18%.

Overall, this initiative was a success in enabling my team to test and deliver their work more efficiently. And I'm happy with that, because I wasn't even keeping track of the metrics before this initiative. 
