### My project, currently affectionately called...

# The Gear Game

### This name is a placeholder and will definitely change

One day, it will be a roguelike deckbuilder with gears used as a playmat. Currently, it's just a fancy gear
simulator with a LOT of foundational code.

## Development Narrative

My project starts as something I know I cannot achieve. An idea I’ve had for quite a while. A 
deckbuilder roguelike, based on a unique system of card play, contrasting against instant effects like the 
Slay the Spire series, or standard creature combat like magic the gathering. Instead, the cards are used on 
prongs of a gear, activated when they hit the uppermost slot, while the gear rotates at the end of the turn. 
It is quite literally, an engine builder. Now my end result, likely, won’t be entirely different from my goal, 
but rather, a step of progression. 

I got started ahead of time, by a couple days. I made multiple decisions that may include what 
would be considered overengineering, such as making gear generation work ad infinitum when I only 
need a maximum of 5. However, I made the decision to perform such pre-emptive design in order to test 
my skills. It may come in handy later, it may not, but either way, it is an exercise of my ability.

After some time working on the project, however, I decided to port the project over to github and 
VScode. The challenging thing here was not the coding, but rather, the software. No matter how complex 
something is, in my personal experience, something I’ve done 0 times before is always harder than 
something else I’ve done 1 time before, with very little exception. Porting it over to github took a rather 
long time and a great deal of confusion.

After this, though, the next step was to apply the card slots. Each gear comes with 8 slots where 
cards can be placed, cards that interact upon entry to the uppermost slot. I found it challenging to 
construct it in such a way that the slots would be subject to the rotations of the gears they are attached to 
while not rotating in of themselves. I asked for help, and took their suggestions in stride, but ultimately
made a concluding work that was somewhere between their own ideas and what I encountered along the way.
My solution, each gear object includes a variable that holds a list of 8 "slot" objects. Each slot object defines
its position on the gear through its position in the list combined with the x and y of the gear, and the rotation
of the gear, defined with a "position" variable that describes its rotation on a scale of 0-7. Essentially, the
information of the slot's position is defined first, and then created in its own, unrotated coordinate grid.

Though it’s not hugely relevant, I thought it worth mentioning how I was caught quite off guard 
by the fact that VScode has the ability to autofill lines it thinks I am going to type… and most 
importantly, it seems to be really, really good at it. I’d be thinking about how exactly to write a line, and 
then I’d type the first character, and it would fill in a complete and rather complex line in for me, I’d 
check it, and be shocked that they clearly understood exactly what it was I was doing, down to the 
intentions of the positions of the slots upon the gears. For example, it autofilled my lines I wrote calculating
where each slot's position should be, *almost* correctly, though I had to change a constant and add the gear's
ambient movement. Because most of the project was performed in js p5 before being ported over, this was actually
the only thing in which the AI got involved, but I thought it important to be clear and upfront.

Honestly, I found it a little concerning. But thankfully I am not reliant on it, as I knew what I
would type when I started the lines. I especially remember you saying you picked this coder option
because it has "the least AI" of them, which is... an especially concerning statement, in my eyes.

Regardless, the code for the slots was implemented, and, paired with a variety of other neat 
details like border fitting and ambient movement, it’s looking good. It’s slow going because of how much 
I’m setting myself up to avoid future issues, and perhaps overengineering, but progress is progress.

The time limit for this assignment itself is upcoming, though. I continue to work on this project 
separately, however, and I hope you won’t mind if a future rendition of the project shows in future 
assignments. There are many places this will go. For now, it is simple. A gear creator with empty slots, 
and a lot of invisible code preparing those slots to be interacted with in important ways.

In many ways, the project, so far, is exactly what I set out to make, it’s just not done yet. Perhaps 
that is weird, but I am one who works from inspiration, and it’s much less common that I stumble upon 
my ideas, and rather, I usually am struck with mental inspiration first, a sort of vision to tackle. And I tend 
to let very little get in the way of that vision, once that vision is there. Unfortunately, I have a lot of these 
visions. And therefore, a lot of projects. So my work is slow going. But I’d like to believe I have 
something special to offer. Even if it’s not quite polished and complete… yet.