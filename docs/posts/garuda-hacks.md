---
title: The Garuda Hacks Experience
thumbnail: /assets/thumbnails/umn.jpg
lastUpdated: 2024-08-19 00:00
categories: tech
published: true
---

I've been a long time fan of hackathons. If you don't know what a hackathon is, I'll pull Wikipedia for you: 
> A hackathon is an event where people engage in rapid and collaborative engineering over a relatively short period of time such as 24 or 48 hours.

Think "hack" and "marathon" – "marathon" to denote endurance race, and the word "hack" not denoting computer hijacking like in cybersecurity, but rather [programming](https://en.wikipedia.org/wiki/Hackathon#Etymology). Hackathons are a quintessential part of a computer science student's journey (or really, anyone into technology). 

I've wanted to try and do these for so long – before I start uni, before I even knew how to code, I've watched these videos about hackathons on YouTube and thought they were such a cool idea. 

"Shame they probably don't have em here, though," I thought. 

Except they do! Last year, when I found an in-person hackathon that I could participate in, I knew what I was going to be doing.

## Garuda Hacks 4.0

In 2023, I entered Garuda Hacks 4.0 as my first ever hackathon, knowing not what to expect. I knew they seemed fun, from YouTube videos and clips of the sleepless nights typical in a hackathon, but I knew nothing else. I assembled a team of 3 other engineers, some of whom I've won competitions with before, and we set out to hack.

Garuda Hacks 4.0 (which I will refer to as GH 4.0) ran for 36 hours straight, from Friday night until Sunday morning. The venue was the campus of Universitas Tarumanegara, and while very spacious, felt quite empty throughout the hacking period.

<img src="/assets/garuda-hacks/untar.jpg" class="w-1/3 h-full mx-auto" alt="hackathon venue"/>
<p class="text-center text-muted-1">Hackathon venue on the 2nd morning</p>

I'll skip the details, to make room as I write below about Garuda Hacks 5.0 (spoilers?). So, we lost. **big** time.

We didn't even get to deploy our product after the two sleepless nights, because our Supabase database was having a tantrum (spoilers~). Aside from Supabase, however, it was a skill issue on our end because we set our sights on a product with features way too ambitious given the event's time constraints.

During the hacking period, we got to speak with a mentor provided by the organizers, and we got to tell him about the ideas and the plans that we had conjured up. There was one thing that he said in particular that still echoes in my head til this day: 
> " You guys are too engineer-minded. "

I was offended, triggered, and honestly very butt-hurt. I left that mentoring session thinking, *"Yeah, we don't need to listen to this guy. Who does he think he is?"*. Looking back, however, that may have been the single most important learning moment throughout my hackathon journey. I remember the car ride home after the hackathon ended, where I reflected, *"Maybe our mentor was right. Maybe we made up excuses."* 

We set our sights amibitiously on a technical level, but we didn't pay enough attention to make sure we could present the product properly. It makes sense in a hackathon, or in any competition: what's the point of making a genius product if the judges can't see the genius of it? We needed *show* the genius (if it was) to the judges.

## Technoscape

Immediately after GH (Garuda Hacks) 4.0, I received an invitation from another friend to join a different hackthon which would start only 5 days following GH 4.0. It was Technoscape's Hackathon, an initiative by Binus Computing Club. At that point, the dust had not settled and I was still exhausted from GH 4.0. And while this hackathon was smaller, had less participants (so technically less competition), I still saw it as an opportunity to redeem myself after Garuda Hacks and validate my learnings after the mistakes we made.

If you want to know what happened, you can read my teammate's [article](https://arkanalexei.com/notes/hackathons) on it.

Tehnoscape had the same 36-hour format, but was fully online rather than in-venue. In the end, we won 1st place. It was valuable insight that allowed me to learn how to plan and how to execute. Despite the taste of victory, I was not satisfied – I was hungry for more; for redemption.

::: info
Fun fact: this team was named Supabase. This will be relevant soon enough.
:::

## Garuda Hacks 5.0

#### Hackers Assemble!

For Garuda Hacks 5.0, the organizers managed to amass a much larger audience of >550 people to participate. 
This year round, the GH team was much better prepared, better informed, and communicated everything to the participants much more transparently. 

Personally, *I* was much better prepared and better informed too. I had a good feeling; [I knew what to do, because I knew what not to do](https://youtu.be/bZe5J8SVCYQ?si=aZ3GywAG3la-mUuK) from past experience. We immadiately assigned all four members to a role: a hipster for all things art and visual, a hustler to be in charge of the narrative & pitch video, as well as two absolutely stacked hackers to build the product. I was the Hustler.

#### Day One: A Strong Start

At around 15:00, we carpooled into one GrabCar, picking the whole team up before heading to the venue: Universitas Multimedia Nusantara. Upon arriving after 17:00, we checked in and re-registered with the event staff then attended the opening ceremony. We spent the whole night brainstorming and finalizing all the details of our plan like the scope of the product, the user journey, the database schema, the outline for our pitch video, and of course the name of our product. 

The product itself was going to be an online platform for people with food hypersensitivites (e.g. celiac disease, egg allergy, FODMAP intolerance, etc). For the name, we ended up going with "Nosh".

We checked in to our hotel at night, which we booked last-minute after the organizers announced that there wouldn't be air conditioning or showers in the venue. 

#### Day Two Electric Boogaloo: The Return of Supabase

The second – and possibly the most important of the entire hacking period – day began with us working from the hotel. Because everyone had been assigned their own "thing", each with a particular deliverable output, we all knew what to do at all times. Every hour of this entire day was comprised of either eating, being super-glued to our laptops, or a long discussion about some detail or feature of our product.

One other thing I did, aside from work on the pitch video, was help fix some issues on the front-end as well as set up deployment. Since our project was a full-stack NextJS app, we just deployed it on Vercel – albeit manually via GitHub Actions, because we forgot we couldn't link the git repository of a GitHub organization on a free plan. The database, however, was a different issue entirely...

This is probably a good time to say that I have PTSD with Supabase. But because it was free, and my teammates say it should be fine, I tried to deploy our database there. Here is where issues arise, once again.

Now, I've worked with many PostgreSQL databases before – once on a project where the end user could execute their own user-generated SQL queries from the front-end, another involving me modifying the PostgreSQL source code (I will say though it did not compile lol). 

This isn't to say that I'm some expert or Postgres God; it is just to say that I am not (at least I don't think) a complete incompetent imbecile when working with PostgreSQL databases. But for SOME reason, the universe knows WHAT, I just always have the hardest time when it comes to working with Supabase. 

Supabase was throwing a tantrum. Again.

I could not connect to it. I scoured the internet and begged to Claude AI as well as ChatGPT, but despite all the solutions I've found, nothing worked. 

I had learnt my lesson from the previous year, where we spent three hours debugging the Supabase DB, and so after about fifteen minutes I immediately pivoted to self-hosting the Postgres DB by "borrowing" a friend's VPS¹ using a simple `docker-compose.yml` to bring it online and operational within minutes.

Thankfully, the rest of the day went by just fine; we spent a good part of the evening in the venue, where we reached closer to finishing. This is also a good time to mention that from the very start of this hackathon, I've been sick. Riddled with a sore throat, fever, and a cough. At around 19:00, still in the venue, I was starting to have a headache. It was a mild one at first, and I thought I could just wait it out or rest. Two hours later, we were back in our hotel, and I tried to take a nap in hopes that my headache would go away. It got worse...

I tried different things to mitigate or at least relieve the headache and fever. At some point I gave up because nothing worked either, and so I decided to just tough it out; besides, the hacking period would end soon.

#### Day Three: The Final Sprint

With a total duration of 36 hours, starting at 18:00 means the hacking period would end at 06:00 on the third day. When the clock ticked 00.00 on the 3rd day, I only had six hours left to finish the pitch video, including the demo, while dealing with my fever and sore throat and sinus headache.

Have I mentioned I had a fever yet?

I couldn't record the demo video until the product was done, and the product was only done by around 1 AM. The bigger issue, however, was that this headache of mine was getting in my way. I couldn't concentrate. I tried my best to just puff my chest out and ignore the pain, but in the end I think my physical condition severely limited the output I produced, both in terms of quality and quantity.

There were a few minor flaws that I desperately wanted to fix, but I just couldn't because I had nothing left in me, and I decided to accept the pitch video I made for what it was. I didn't know if this was going to be a defining moment that lost us the hackathon, or whether this was good enough. But I gave my 100%, and in the end I left nothing on the table. I worked with the cards I was dealt with.

While two of our team members went to bed, me and the other remaining member stayed up to finished the pitch video and complete our submission on Devpost with less than three hours to the deadline. We immediately went to sleep after.

![](/assets/garuda-hacks/find-destinations.png)
<p class="text-center text-muted-1">A snapshot of the pitch video</p>

#### Post-Hack

I woke up early, after 4 hours of sleep, with my headache gone. Maybe I should have napped earlier. But we took our well deserved break with pride, knowing that whatever happens is the result of our honest and complete 100%. We stayed at our hotel the whole morning, sitting by the swimming pool. We basked in the glorious sunshine and chatted while having breakfast (leftover kue bolu from the previous day).

We had to check out of the hotel, so after lunch we headed back to the venue while the judging process was going on. The hours of waiting until the closing ceremony was comprised of us meeting up with our friends from other teams and having a chat.

At 17:00, the closing ceremony started.

Now, I didn't know what to expect, since this was probably the biggest hackathon I'd joined. The number of teams participating in Technoscape was in the dozens, Garuda Hacks 4.0 had about 50, but Garuda Hacks 5.0 had over 100. 

My mind began racing. So did we do enough? I'd learnt from all those failures and errors in the past year, but did it suffice? Learning and improving from your past self is great and all, but in a competition where you have to be better than – not your past self – but your competition, at the end of the day you have to ask if your learnings were sufficient.

Did we narrow down what **not** to do precisely enough to know what to do? Did the idea even have potential in the first place? I thought long and hard, completely zoning out through some parts of the awarding ceremony, realizing that if we didn't win a single award then I didn't know what we'd done wrong. I wouldn't have known what lesson we would bring home.

And then **Nosh** popped up on the screen.

# `"3rd place"`

It honestly caught me by surprise. I was mid-zoning out, overthinking it all, when this popped up and our pitch video was played out. But hey! It's something, and I was happy about it. Seeing this result made me feel like all the sinus headaches were worth it.

![](/assets/garuda-hacks/devpost.png)
<p class="text-center text-muted-1">Our submission's <a href="https://devpost.com/software/nosh">DevPost page</a>.</p>

We went out for a celebratory dinner but were all too exhausted to do anything else, so we headed straight home afterwards.

## Reflection

I'm going to let you in on a little secret that our team learnt, for any of your future hackathon endeavours, because you've read this far: **not a single judge accessed our website**. The product was a web-based MVP, and we included the URL everywhere (in the submission, in the GitHub, under the YouTube video). We made sure it was functional.

However, with over 20 judges, not one accessed Nosh. I know because in order to access it, you need to login with a Google account, but there was not a single login attempt made by the time the awarding ceremony began. This means that the judges made all their decisions solely of the submission (Devpost) and pitch video. 

I don't have any comment on that, just take from that what you will :)

Garuda Hacks was a painful, fever-filled experience that ended very satisfyingly. I think the organizers did a fantastic job in making the whole experience fun, safe, and very memorable. Despite my health, and despite Supabase, I don't wish that this experience had gone any other way.

¹ [the friend in question](https://www.ristek.cs.ui.ac.id/) (I'm sorry)₍ₗₘ ₙₒₜ₎