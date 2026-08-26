---
title: The Architecture of Melio
lastUpdated: 2026-08-25 00:00
categories: tech
published: true
---

This is going to a fairly short blog explaining the architecture behind MelioSMP, a Minecraft server that I used to operate for over 900 monthly active players. 

While a lot of you probably know that you can just start your Minecraft server by just running the command `java server.jar` in a terminal and leave it there, it's like saying you can just run `docker compose up -d` for your web application in production: sure, that could work, but wouldn't it better to have proper infrastructure in place?

## The Problems

The first thing you need to know is that the biggest constraint of designing this system was cost: we didn't make that much money, and any money we did make was always reinvested into the server. 

The reason we did that was to continuously improve reliability and player experience. Running a Minecraft server takes far more resources than a NodeJS or Springboot server, so with a large enough number of players your server will inevitably start to lag. Additionally, with our use of the community-developed Fabric (a framework that provides an API to the game) and unofficial mods, you run into crashes pretty frequently – either through bugs and unhandled errors, or from running out of resources. So that's the second thing: we optimized the system's design for reliability and performance.

A large part of reliability, I think, is observability – real-time metrics and alerts have been instrumental in monitoring the server's health from day one. As a matter of fact, 'Prometheus Exporter' was the first ever mod I installed to the server (this was before the server launched to players)!

![A Grafana dashboard showing metrics exported by our server](/assets/melio/dashboard.png)
<p class="text-center text-muted-1">A Grafana dashboard we used for our server</p>

This allowed us to monitor resource usage but also in-game metrics of the server, like the game tick rate, number of entities, number of online players, and more.

## Day Zero

Architecture wasn't on my mind on the first day, I kept it very simple with only one machine for everything.

<img
    src="/assets/melio/architecture-1.png"
    alt="An architecture diagram of Melio's first system"
    class="rounded-2xl"
/>

The most glaring issue with this, however, was that every time the server OOM-ed (or really, whenever the machine died), I would lose access to our Prometheus and thus any form of visibility. This happened frequently, as you may have guessed.

Another issue was the fact that I only had `screen` terminal session running `java server.jar` in the background. This was kinda stupid because you'd have scenarios where I was tinkering on the Minecraft server console while other players were on the server, but I exitted the terminal instead of detaching from the `screen` session, shutting the server down and disconnecting every player at once (whoopsie).

Additionally, I wanted to have a testing server or Creative Mode world for players who wanted somewhere to design schematics, test their farms, or experiment with game mechanics before applying it in Survival Mode on our main server. This had to be a separate server entirely, because I also needed a 'staging server' to develop my custom mods. I tried to put the testing server and the main server together on one machine, but there were simply not enough resources. Because there was no resource isolation, an OOM on the testing server was able to starve resources from the main server - players felt the impact of this.

With the issues of our limited architecture, on top of the server lag that players were experiencing (we attributed this to a lack of resources, because the server's RAM and CPU usage were maxxing out during peak hours), we wasted no time to upgrade our systems the moment we had the financial capacity to.

## A Whole New World

<img
    src="/assets/melio/architecture-2.png"
    alt="An architecture diagram of Melio's upgraded system"
    class="rounded-2xl"
/>

A lot of new components - the most obvious being the addition of a second machine code-named Lodestone. This was our command center; observability and server management was now done from here. Part of server management was also monitoring or working from our Pelican Panel - a Docker-based "game server control panel" which supports server-hosting for many games like CS, Terraria, Rust (the game, not the language), Palworld, Minecraft.

No longer did we have to have a tmux/screen session running `java server.jar`, we were now able to configure server settings, monitor the console, and restart a server (or *multiple* servers) from a web dashboard. The way this works was by having one central Panel connected to multiple Wing nodes. Each Wing would be tied to one Minecraft server. You can see the diagram above that we now had two servers: a Workshop server in Lodestone, and a main server in Titan. These were both controlled and configured via our admin panel.

Prometheus now collected metrics from Node Exporter (Prometheus' exporter of machine metrics) in both Lodestone and Titan. We also moved our Prometheus to Lodestone, solving the first issue we had of losing visibility when the main server's machine died. In retrospect, this could have been resolved by using Grafana Cloud's remote Prometheus instance. 

## Everything Else

One point of interest I've yet to mention is the backups system. In the old system we had a server-side mod that simply compressed our world files and copied it to Google Drive. Because of the size of our world (and the price of cloud storage), we migrated to using an incremental backup system stored on a separate machine. 

The way this works is we'd have daily cron jobs running the backup. Every time a new backup was made, the files were not stored as a new, separate backup. Instead, Duplicati would split our world files into file chunks, then each subsequent backup only stored the difference with the most recent one. That way, you don't need to pay for as much storage!

Last but not least, Titan. This was a bare-metal monster that was, as much as possible, isolated for just the main Minecraft server. This was my first time managing a bare-metal, and to my surprise, the only differences with VPS/VMs were minor, specifically in the networking setup - everything else was just like operating a normal VPS.

## The End?

While there was so much more to managing this Minecraft server such as managing the community, leading the staff team, preparing and creating in-game events for players (I haven't even gotten into how we managed a 3-billion-row database for Ledger / CoreProtect, which logs all in-game block and item interactions), I'll close here. I've always gotten intimidated by how much there was about Melio that I could write so maybe that's a topic for another day.

For my server hosts, Machine 1 was hosted on Little Creek - good customer experience, highly recommended. Lodestone was hosted on Layer7, while the one and only Titan was hosted on OVH - both of which offered me great performance for reasonable prices (although I did have some billing issues on OVH). I can't recall where the Duplicati Data Server was hosted on, but I believe that was the old Machine 1.

Now, a lot of experienced Minecraft players may point out, "can't you just pay a managed Minecraft server hosting service and avoid all of this setup?" and I honestly could've, yes. But my selfish answer is that I wouldn't have gotten the experience or challenge of managing all of this infrastructure on my own. I definitely learned a lot from this.

Was all of this infra work worth it? I can't say with certainty. Unfortunately, I didn't track metrics like long-term uptime, number of crashes, or average tick rate. In terms of value for money, you will definitely get more just paying a managed Minecraft hosting service. However, for the level of control we wanted over our tech, I'd say it was worth it.