---
title: The Garuda Hacks Experience
thumbnail: /assets/thumbnails/umn.jpg
lastUpdated: 2024-08-19 23:48:00
categories: tech
published: true
---

## Hacks?

I've been a long time fan of hackathons. If you don't know what a hackathon is, I'll pull Wikipedia for you: 
> A hackathon is an event where people engage in rapid and collaborative engineering over a relatively short period of time such as 24 or 48 hours.

Think "hack" and "marathon" – marathon to denote endurance race, and the word hack not denoting computer hijacking like in cybersecurity, but rather [programming](https://en.wikipedia.org/wiki/Hackathon#Etymology). Hackathons are a quintessential part of a computer science student's journey (or really, anyone into technology). 

I've wanted to try and do these for so long – before I start uni, before I even knew how to code, I've watched these videos about hackathons on YouTube and thought they were such a cool idea. "Shame they probably don't have em here, though." 

Except they do!

Last year, when I found an in-person hackathon that I could participate in, I knew what I was going to be doing.

## 2023

### Garuda Hacks 4.0

In 2023, I entered Garuda Hacks 4.0 as my first ever hackathon, knowing not what to expect. I knew they seemed fun, from YouTube videos and clips of the sleepless nights typical in a hackathon, but I knew nothing else. I assembled a team of 3 other engineers, some of whom I've won competitions with before, and we set out to hack.

Garuda Hacks 4.0 (which I will refer to as GH 4.0) ran for 36 hours straight, from Friday night until Sunday morning. The venue was a private campus, and while rather spacious felt quite empty throughout the hacking period. 

I'll skip the details, to make room as I write below about Garuda Hacks 5.0 (spoilers?): we lost. **big** time.

We didn't even get to deploy our product after the two sleepless nights, because our Supabase database was having a tantrum (foreshadowing~). Aside from Supabase, however, it was a skill issue on our end because we set our sights on a product with features way too ambitious and large given the major time constraint.

During the hacking period, we got to speak with a mentor provided by the organizers, and we got to tell him about the ideas and the plans that we had conjured up. There was one thing that he said in particular that still echoes in my head til this day: 
> " You guys are too engineer-minded. "

I was offended, triggered, and honestly very butt-hurt. I left that mentoring session thinking, *"yeah we don't need to listen to this guy. who does he think he is?"*. Looking back, however, that may have been the single most important learning moment throughout my hackathon journey. I remember the car ride home from the hacking venue, where I was reflecting, *"maybe our mentor was right. but it was impossible to pivot that late into the hackathon."* 

We set our sights amibitiously on a technical level, but we didn't pay enough attention to make sure we could present the product properly. It makes sense in a hackathon, or in any competition: what's the point of making a genius product if the judges can't see the genius of it? We needed *show* the genius (that is IF it was genius at all) to the judges.

### Technoscape

Not long after Garuda Hacks 4.0, I received an invitation from a friend (who I did not team up with in GH 4.0) to join another hackathon, starting only 5 days following GH 4.0. It was Technoscape's Hackathon, an initiative by Binus Computing Club. At that point, the dust had not settled and I was still exhausted from GH 4.0. And while this hackathon was smaller, had less participants (so technically less competition), I still saw it as an opportunity to redeem myself after Garuda Hacks and validate my learnings after the mistakes we made.

If you want to know what happened, you can read my teammate's [article](https://arkanalexei.com/notes/hackathons) on it.

Tehnoscape had the same 36-hour format, but was fully online rather than in-venue. In the end, we won 1st place. It was valuable insight into what format could work, and how I should better leverage my own skills (which was, funnily enough, NOT coding). Despite the taste of victory, I was not satisfied – I don't think any of us were. 

I was hungry for more; for redemption.

::: info
Fun fact: this team was named Supabase. This will be relevant soon enough.
:::

## 2024

The rest of 2023 was filled with a series of trials and errors – though mostly errors – through different competitions, none of which were hackathons. My first few months in 2024 were occupied by an exchange program (I did not get to join a hackathon while I was there, unfortunately) so I entered the third quarter of 2024 feeling rusty, like I've got to "get back into the game" after being out of it for so long.

I did take up a project – which I'm unable to disclose here – related to Garuda Hacks and their team. I will say though that I managed to learn nothing about the hacking side of things, and we were not even informed of anything related to the actual 2024 hackathon. But having worked with the Garuda Hacks team, I was invested and decided it was finally time to make it all worthwhile and get that W.

### The Garuda Hacks 5.0 Experience (for real this time)

#### Hackers Assemble

From my perspective, the pre-event build up felt slow. The GH team managed to build much more hype for the event than they did the previous year, but it took a while and for me was only apparent in the two weeks leading up to it. They managed to get >550 participants, which was impressive.

All of the information they provided was either on Discord or in their 'Hacker Handbook': a Google Docs that contained most things that GH 5.0 participants needed to know. This year round, the GH team was much better prepared, better informed, and communicated everything to the participants much more transparently. As a result, the participants too were much better prepared (at least I was).

I had a good feeling; [we knew what to do, because we knew what not to do](https://youtu.be/bZe5J8SVCYQ?si=aZ3GywAG3la-mUuK). We had four members: a hipster for all things art and visual, a hustler to be in charge of the pitch video, as well as two absolutely stacked hackers to build the product. I was the Hustler.

#### Day One: A Strong Start

At around 15:00, we carpooled into one GrabCar, picking the whole team up before heading to the venue: Universitas Multimedia Nusantara. Funnily enough, this was my first time ever meeting two of my three teammates. Upon arriving after 17:00, we checked in and re-registered with the event staff then attended the opening ceremony. We spent the whole night brainstorming and finalizing all the details of our plan like the scope of the product, the user journey, the database schema, the outline for our pitch video, and of course the name of our product. 

The product itself was going to be an online platform for people with food hypersensitivites (e.g. celiac disease, egg allergy, FODMAP intolerance, etc). For the name, we ended up going with "Nosh".

We checked in to our hotel at night, which we booked last-minute after the organizers announced that there wouldn't be air conditioning or showers in the venue. 

#### Day Two Electric Boogaloo: The Return of Supabase

The second – and possibly the most important of the entire hacking period – day began with us working from the hotel. Because everyone had been assigned their own "thing", each with a particular deliverable output, we all knew what to do at all times. Every hour of this entire day was comprised of either eating, being super-glued to our laptops, or a long discussion about some detail or feature of our product.

One other thing I did, aside from work on the pitch video, was help fix some issues on the front-end as well as set up deployment. Since our project was a full-stack NextJS app, we just deployed it on Vercel – albeit manually via GitHub Actions, because we forgot we couldn't link the git repository of a GitHub organization on a free plan. The database, however, was a different issue entirely...

Now is probably a good time to say that I have PTSD with Supabase. But because it was free, and my teammates say it should be fine, I tried to deploy our database there. Here is where issues arise, once again.

I've worked with many PostgreSQL databases before – once on a project where the end user could execute their own user-generated SQL queries from the front-end, another involving me modifying the PostgreSQL source code (I will say though it did not compile lol). 

This isn't to say that I'm some expert or Postgres God; it is just to say that I am not (at least I don't think) a complete incompetent imbecile when working with PostgreSQL databases. But for SOME reason, the universe knows WHAT, I just always have the hardest time when it comes to working with Supabase. 

Supabase was throwing a tantrum. 

I could not connect to it from our project. I scoured the internet and begged to Claude AI as well as ChatGPT, but despite all the solutions I've found, none worked. 

But I learnt my lesson from the previous year, where we spent three hours debugging the Supabase DB, and so after about fifteen minutes I immediately pivoted to hosting the Postgres DB "borrowing" a friend's VPS¹ using a simple docker-compose.yml to bring it online and operational within minutes.

The rest of the day went by just fine; we spent a good part of the evening in the venue, where we reached closer to finishing. But now is a good time to mention, that from the very start of this hackathon, I've been sick. Riddled with a sore throat, fever, and a cough. At around 19:00, still in the venue, I was starting to have a headache. It was a mild one at first, and I thought I could just wait it out or rest. Two hours later, we were back in our hotel, and I tried to take a nap in hopes that my headache would go away.

It got worse...

At some point I realized this was a sinus headache, where sleeping in an air-conditioned room was just going to make my head spin more. I tried the classic "shove hot towel into face" technique, and while that did remedy my headache for a few minutes, every single time I did it, the headache would just come right back. And so I decided to just tough it out; besides, the hacking period was about to end.

#### Day Three: The Final Sprint

With a total duration of 36 hours, starting at 18:00 means the hacking period would end at 06:00 on the third day. So I had six hours to finish the pitch video, including the demo, with my fever and sore throat and sinus headache.

Have I mentioned I had a fever?

I couldn't record the demo video until the product was done, and the product was only done by around 1 AM. The bigger issue, however, was that this headache of mine was getting in my way. I couldn't concentrate. I tried my best to just puff my chest out and ignore the pain, but in the end I think my physical condition severely limited the output I produced, both in terms of quality and quantity.

There were a few minor flaws that I desperately wanted to fix, but I just couldn't because I had nothing left in me, and I decided to accept the pitch video I made for what it was. I didn't know if this was going to be a defining moment that lost us the hackathon, or whether this was good enough. But I gave my 100%, and in the end I left nothing on the table. I worked with the cards I was dealt with.

While two of our team members went to bed, me and the other remaining member stayed up to finished the pitch video and complete our submission on Devpost with less than three hours to the deadline. We immediately went to sleep after. 

#### Post-Hack

I woke up early, after 4 hours of sleep, with my headache gone. Maybe I should have napped earlier. But we took our well deserved break with pride, knowing that whatever happens is the result of our honest and complete 100%. We stayed at our hotel the whole morning, sitting by the swimming pool. We basked in the glorious sunshine and chatted while having a... snack... that resembles a breakfast (it was some leftover kue bolu from the previous day).

We had to check out of the hotel, so after lunch we headed back to the venue while the judging process was going on. The hours of waiting until the closing ceremony was comprised of us meeting up with our friends from other teams and having a chat.

At 17:00, the closing ceremony started.

Now, I didn't know what to expect, since this was probably the biggest hackathon I'd joined. The number of teams participating in Technoscape was in the dozens, Garuda Hacks 4.0 had about 50, but Garuda Hacks 5.0 had over 100. 

So did we do enough? I'd learnt from all those failures and errors in the past year, but did it suffice? Learning and improving from your past self is great and all, but in a competition where you have to be better than – not your past self – but your competition, at the end of the day you have to ask if your learnings were sufficient.

Did we narrow down what **not** to do precisely enough to know what to do? Did the idea even have potential in the first place? I thought long and hard, completely zoning out through some parts of the awarding ceremony, realizing that if we didn't win a single award then I didn't know what we'd done wrong. I wouldn't have known what lesson we would bring home.

And then **Nosh** popped up on the screen.

# `"3rd place"`

It honestly caught me by surprise. I was mid-zoning out, overthinking it all, when this popped up and our pitch video was played out. But hey! It's something, and I was happy about it. This made my sinus headaches all worth it. Have I mentioned yet I had a fever?

We went out for a celebratory dinner but were all too exhausted to do anything else, so we headed straight home afterwards.

#### Reflection

I'm going to let you in on a little secret that our team learnt, for any of your future hackathon endeavours, because you've read this far: **not a single judge accessed our website**. The product was a web-based MVP, and we included the URL everywhere (in the submission, in the GitHub, under the YouTube video). The hackathon organizers even gave out free .xyz domains!! Over 20 judges, and not one actually opened Nosh. The reason I know is because to try it, you need to login with a Google account, and there was not a single login attempt made by the time the awarding ceremony began. This means that the judges made all their decisions solely of the submission (Devpost) and pitch video. 

I don't have any comment on that, just take from that what you will :)

This did get me thinking though: what more could **I**, responsible for the Devpost submission *and* the pitch video, have done? If not for my health, how much better could we have done? Was 3rd place going to be it, or was there room for more if I had presented our idea and demo in a way that better reached the judges' hearts and minds? 

I've written about the [Path Not Taken](#) and all things "what could've been" so I'm not gonna repeat that tangent – this is something I'll never find out, because to find out I would have needed to be handed better cards. Part of life is being resourceful; working with what cards you have, right? I was privileged enough that my health wasn't any worse, and that my team had fantastic chemistry on our first ever time meeting each other, so I won't complain.

Garuda Hacks has been a painful (nothing to do with the actual hackathon itself! have I mentioned yet I had a fev-) yet very satisfying experience. The struggle was real, but in the end worth it. I think the organizers did a fantastic job in making the whole experience fun, safe, and very memorable.

Despite my health, and despite Supabase, I wouldn't have wished it any other way.

¹ [the friend in question](https://www.ristek.cs.ui.ac.id/) (I'm sorry)₍ₗₘ ₙₒₜ₎