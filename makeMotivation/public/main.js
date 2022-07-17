const updateBtn = document.querySelectorAll(".update-quote");
const deleteBtn = document.querySelectorAll(".delete-quote");
const templateQuoteString = document.getElementById("quote-0");
const templateQuoteBtn = document.getElementById("random-quote-update0");
const templateDeleteBtn = document.getElementById("deleteBtn-0");
templateQuoteBtn.style.display = "none";
templateDeleteBtn.style.display = "none";
templateQuoteString.style.display = "none";
templateQuoteString.parentElement.style.display = "none"

const QUOTE_DATA = [
    {
        "id_0": "One cannot step twice into the same",
        "from": "Heraclitus" 
    },
    {  
        "id_1":"The only people who never fail are those who never try.",
        "from":"Ilka Chase"
     },
     {  
        "id_2":"Failure is just another way to learn how to do something right.",
        "from":"Marian Wright Edelman"
     },
     {  
        "id_3":"I failed my way to success.",
        "from":"Thomas Edison"
     },
     {  
        "id_4":"Every failure brings with it the seed of an equivalent success.",
        "from":"Napoleon Hill"
     },
     {  
        "id_5":"Only those who dare to fail greatly can ever achieve greatly.",
        "from":"John F. Kennedy"
     },
     {  
        "id_6":"It is hard to fail, but it is worse never to have tried to succeed.",
        "from":"Theodore Roosevelt"
     },
     {  
        "id_7":"Imagination is more important than knowledge.",
        "from":"Albert Einstein"
     },
     {  
        "id_8":"Hold fast to dreams, for if dreams die, life is a broken winged bird that cannot fly.",
        "from":"Langston Hughes"
     },
     {  
        "id_9":"The future belongs to those who believe in the beauty of their dreams.",
        "from":"Eleanor Roosevelt"
     },
     {  
        "id_10":"Go confidently in the direction of your dreams. Live the life you have imagined.",
        "from":"Henry David Thoreau"
     },
     {  
        "id_11":"You cannot depend on your eyes when your imagination is out of focus.",
        "from":"Mark Twain"
     },
     {  
        "id_12":"Commitment leads to action. Action brings your dream closer.",
        "from":"Marcia Wieder"
     },
     {  
        "id_13":"I never think of the future",
        "from":"it comes soon enough."
     },
     {  
        "id_14":"Don't waste your life in doubts and fears: Spend yourself on the work before you, well assured that the right performance of this hour's duties will be the best preparation for the hours or ages that follow it.",
        "from":"Ralph Waldo Emerson"
     },
     {  
        "id_15":"Do not anticipate trouble or worry about what may never happen. Keep in the sunlight.",
        "from":"Benjamin Franklin"
     },
     {  
        "id_16":"Take time to deliberate; but when the time for action arrives, stop thinking and go in.",
        "from":"Andrew Jackson"
     },
     {  
        "id_17":"The mind that is anxious about future events is miserable.",
        "from":"Seneca"
     },
     {  
        "id_18":"Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influences of each.",
        "from":"Henry David Thoreau"
     },
     {  
        "id_19":"The art of leadership is saying no, not yes. It is very easy to say yes.",
        "from":"Tony Blair"
     },
     {  
        "id_20":"A leader is a dealer in hope.",
        "from":"Napoleon Bonaparte"
     },
     {  
        "id_21":"While a good leader sustains momentum, a great leader increases it.",
        "from":"John C. Maxwell"
     },
     {  
        "id_22":"A general is just as good or just as bad as the troops under his command make him.",
        "from":"General Douglas MacArthur"
     },
     {  
        "id_23":"To do great things is difficult; but to command great things is more difficult.",
        "from":"Friedrich Nietzsche"
     },
     {  
        "id_24":"Leadership does not always wear the harness of compromise.",
        "from":"Woodrow Wilson"
     },
     {  
        "id_25":"Business opportunities are like buses",
        "from":"there's always another one coming."
     },
     {  
        "id_26":"I avoid looking forward or backward, and try to keep looking upward.",
        "from":"Charlotte Bronte"
     },
     {  
        "id_27":"The more difficulties one has to encounter, within and without, the more significant and the higher in inspiration his life will be.",
        "from":"Horace Bushnell"
     },
     {  
        "id_28":"Every artist was first an amateur.",
        "from":"Ralph Waldo Emerson"
     },
     {  
        "id_29":"I was always looking outside myself for strength and confidence, but it comes from within. It is there all of the time.",
        "from":"Anna Freud"
     },
     {  
        "id_30":"We can do anything we want to do if we stick to it long enough.",
        "from":"Helen Keller"
     },
     {  
        "id_31":"Our business in life is not to get ahead of others, but to get ahead of ourselves.",
        "from":"E. Joseph Cossman"
     },
     {  
        "id_32":"Insist on yourself. Never imitate.",
        "from":"Ralph Waldo Emerson"
     },
     {  
        "id_33":"Who looks outside, dreams. Who looks inside, awakes.",
        "from":"Carl Jung"
     },
     {  
        "id_34":"It is not easy to find happiness in ourselves, and it is not possible to find it elsewhere.",
        "from":"Agnes Repplier"
     },
     {  
        "id_35":"The only journey is the one within.",
        "from":"Rainer Maria Rilke"
     },
     {  
        "id_36":"Follow your honest convictions, and stay strong.",
        "from":"William Thackeray"
     },
     {  
        "id_37":"The happiness of your life depends upon the quality of your thoughts; therefore guard accordingly.",
        "from":"Marcus Aurelius"
     },
     {  
        "id_38":"Action may not always bring happiness; but there is no happiness without action.",
        "from":"Benjamin Disraeli"
     },
     {  
        "id_39":"Happiness depends more on the inward disposition of mind than on outward circumstances.",
        "from":"Benjamin Franklin"
     },
     {  
        "id_40":"There is no happiness except in the realization that we have accomplished something.",
        "from":"Henry Ford"
     },
     {  
        "id_41":"Happiness is not a goal, but a by-product.",
        "from":"Eleanor Roosevelt"
     },
     {  
        "id_42":"Happiness is not a state to arrive at, but a manner of traveling.",
        "from":"Margaret Lee Runbeck"
     },
     {  
        "id_43":"Purpose is what gives life a meaning.",
        "from":"C. H. Parkhurst"
     },
     {  
        "id_44":"The significance of a man is not in what he attains but in what he longs to attain.",
        "from":"Kahlil Gibran"
     },
     {  
        "id_45":"In all things that you do, consider the end.",
        "from":"Solon"
     },
     {  
        "id_46":"Life can be pulled by goals just as surely as it can be pushed by drives.",
        "from":"Viktor Frankl"
     },
     {  
        "id_47":"The virtue lies in the struggle, not in the prize.",
        "from":"Richard Monckton Milnes"
     },
     {  
        "id_48":"To reach a port, we must sail",
        "from":"sail, not tie at anchor"
     },
     {  
        "id_49":"Success is the child of audacity.",
        "from":"Benjamin Disraeli"
     },
     {  
        "id_50":"The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
        "from":"Vince Lombardi"
     },
     {  
        "id_51":"The secret of success is to know something nobody else knows.",
        "from":"Aristotle Onassis"
     },
     {  
        "id_52":"The surest way not to fail is to determine to succeed.",
        "from":"Richard Brinsley Sheridan"
     },
     {  
        "id_53":"I cannot give you the formula for success, but I can give you the formula for failure",
        "from":"which is: Try to please everybody."
     },
     {  
        "id_54":"Careful thinking and hard work will solve nearly all your problems. Try and see for yourself.",
        "from":"Ullery"
     },
     {  
        "id_55":"Years teach us more than books.",
        "from":"Berthold Auerbach"
     },
     {  
        "id_56":"The only medicine for suffering, crime, and all the other woes of mankind, is wisdom.",
        "from":"Thomas Huxley"
     },
     {  
        "id_57":"The art of being wise is knowing what to overlook.",
        "from":"William James"
     },
     {  
        "id_58":"The great lesson is that the sacred is in the ordinary, that it is to be found in one's daily life, in one's neighbors, friends and family, in one's backyard.",
        "from":"Abraham Maslow"
     },
     {  
        "id_59":"A wise man learns by the mistakes of others, a fool by his own.",
        "from":"Latin proverb"
     },
     {  
        "id_60":"No man was ever wise by chance.",
        "from":"Seneca"
     },
     {  
        "id_61":"In everything the ends well defined are the secret of durable success.",
        "from":"Victor Cousins"
     },
     {  
        "id_62":"Arriving at one goal is the starting point to another.",
        "from":"John Dewey"
     },
     {  
        "id_63":"A goal is a dream with a deadline.",
        "from":"Napoleon Hill"
     },
     {  
        "id_64":"Most 'impossible' goals can be met simply by breaking them down into bite-size chunks, writing them down, believing them, and then going full speed ahead as if they were routine.",
        "from":"Don Lancaster"
     },
     {  
        "id_65":"Goals are the fuel in the furnace of achievement.",
        "from":"Brian Tracy"
     },
     {  
        "id_66":"We are what we repeatedly do. Excellence, therefore, is not an act but a habit.",
        "from":"Aristotle"
     },
     {  
        "id_67":"Take risks and you'll get the payoffs. Learn from your mistakes until you succeed. It's that simple.",
        "from":"Bobby Flay"
     },
     {  
        "id_68":"The best way out is always through.",
        "from":"Robert Frost"
     },
     {  
        "id_69":"You miss 100 percent of the shots you don't take.",
        "from":"Wayne Gretzky"
     },
     {  
        "id_70":"Nothing will ever be attempted if all possible objections must first be overcome.",
        "from":"Samuel Johnson"
     },
     {  
        "id_71":"Don't bunt. Aim out of the ballpark.",
        "from":"David Ogilvy"
     },
     {  
        "id_72":"“The critical ingredient is getting off your butt and doing something. It’s as simple as that. A lot of people have ideas, but there are few who decide to do something about them now. Not tomorrow. Not next week. But today. The true entrepreneur is a doer, not a dreamer.”",
        "from":"Nolan Bushnell, entrepreneur."
     },
     {  
        "id_73":"“Never give in",
        "from":"never, never, never, never, in nothing great or small, large or petty, never give in except to convictions of honour and good sense. Never yield to force; never yield to the apparently overwhelming might of the enemy.” - Winston Churchill, British Prime Minister."
     },
     {  
        "id_74":"Your most unhappy customers are your greatest source of learning.",
        "from":"Bill Gates, co-founder of Microsoft."
     },
     {  
        "id_75":"I have not failed. I’ve just found 10,000 ways that won’t work.",
        "from":"Thomas Edison, inventor."
     },
     {  
        "id_76":"Entrepreneurship is neither a science nor an art. It is a practice.",
        "from":"Peter Drucker, management consultant, educator, and author."
     },
     {  
        "id_77":"In the modern world of business, it is useless to be a creative, original thinker unless you can also sell what you create.",
        "from":"David Ogilvy, co-founder of Ogilvy & Mather."
     },
     {  
        "id_78":"Success is how high you bounce after you hit bottom.",
        "from":"General George Patton."
     },
     {  
        "id_79":"If you’re not embarrassed by the first version of your product, you’ve launched too late.",
        "from":"Reid Hoffman, co-founder of LinkedIn."
     },
     {  
        "id_80":"Positive thinking will let you do everything better than negative thinking will.",
        "from":"Zig Ziglar, author, salesman, and motivational speaker."
     },
     {  
        "id_81":"I’m not afraid of dying, I’m afraid of not trying.",
        "from":"Jay Z, musician."
     },
     {  
        "id_82":"Whatever the mind can conceive and believe, the mind can achieve.",
        "from":"Dr. Napoleon Hill, author of Think and Grow Rich."
     },
     {  
        "id_83":"The longer you’re not taking action the more money you’re losing",
        "from":"Carrie Wilkerson"
     },
     {  
        "id_84":"If you live for weekends or vacations, your shit is broken",
        "from":"Gary Vaynerchuk"
     },
     {  
        "id_85":"Go Big, or Go Home",
        "from":"Eliza Dushku"
     },
     {  
        "id_86":"Most great people have attained their greatest success just one step beyond their greatest failure",
        "from":"Napoleon Hill"
     },
     {  
        "id_87":"Opportunity is missed by most people because it is dressed in overalls and looks like work",
        "from":"Thomas Edison"
     },
     {  
        "id_88":"Have the end in mind and every day make sure your working towards it",
        "from":"Ryan Allis"
     },
     {  
        "id_89":"He who begins many things finishes but few",
        "from":"German Proverb"
     },
     {  
        "id_90":"The best use of life is to spend it for something that outlasts it",
        "from":"William James"
     },
     {  
        "id_91":"If you think education is expensive, try ignorance",
        "from":"Derek Bok"
     },
     {  
        "id_92":"Entrepreneurship is living a few years of your life like most people wont so you can spend the rest of your life like most people can’t",
        "from":"A student in Warren G. Tracy’s class"
     },
     {  
        "id_93":"Lend your friend $20, if he doesn’t pay you back then he’s not your friend. Money well spent",
        "from":"Ted Nicolas"
     },
     {  
        "id_94":"Be nice to geek’s, you’ll probably end up working for one",
        "from":"Bill Gates"
     },
     {  
        "id_95":"To never forget that the most important thing in life is the quality of life we lead",
        "from":"Quoted by Tony Hsieh on Retireat21"
     },
     {  
        "id_96":"Its better to own the racecourse then the race horse",
        "from":"Unknown"
     },
     {  
        "id_97":"When you go to buy, don’t show your silver",
        "from":"Chinese Proverb"
     },
     {  
        "id_98":"It’s easier to ask forgiveness than it is to get permission",
        "from":"Grace Hopper"
     },
     {  
        "id_99":"To win without risk is to triumph without glory",
        "from":"Corneille"
     },
     {  
        "id_100":"Example is not the main thing in influencing other people; it’s the only thing",
        "from":"Abraham Lincoln"
     },
     {  
        "id_101":"Associate yourself with people of good quality, for it is better to be alone than in bad company",
        "from":"Booker T. Washington"
     },
     {  
        "id_102":"Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great",
        "from":"Mark Twain"
     },
     {  
        "id_103":"There is only one success",
        "from":"to be able to spend your life in your own way"
     },
     {  
        "id_104":"You don’t buy a nice car and get rich you get rich and buy a nice car",
        "from":"Unknown"
     },
     {  
        "id_105":"Fall seven times, stand up eight",
        "from":"Japanese Proverb"
     },
     {  
        "id_106":"One day your life will flash before your eyes. Make sure it is worth watching",
        "from":"Mooie"
     },
     {  
        "id_107":"Whatever the mind can conceive and believe, the mind can achieve",
        "from":"Dr. Napoleon Hill"
     },
     {  
        "id_108":"I have not failed. I’ve just found 10,000 ways that won’t work",
        "from":"Thomas Alva Edison"
     },
     {  
        "id_109":"If you ain’t making waves, you ain’t kickin’ hard enough",
        "from":"Unknown"
     },
     {  
        "id_110":"What is not started will never get finished",
        "from":"Johann Wolfgang von Goethe"
     },
     {  
        "id_111":"Do not wait to strike until the iron is hot; but make it hot by striking",
        "from":"William B. Sprague"
     },
     {  
        "id_112":"When you cease to dream you cease to live",
        "from":"Malcolm Forbes"
     },
     {  
        "id_113":"There are two rules for success. 1) Never tell everything you know.",
        "from":"Roger H. Lincoln"
     },
     {  
        "id_114":"The only place where success comes before work is in the dictionary.",
        "from":"Vidal Sassoon"
     },
     {  
        "id_115":"Every single person I know who is successful at what they do is successful because they love doing it.",
        "from":"Joe Penna"
     },
     {  
        "id_116":"Being realistic is the most commonly traveled road to mediocrity.",
        "from":"Will Smith"
     },
     {  
        "id_117":"Whenever an individual or a business decides that success has been attained, progress stops.",
        "from":"Thomas J. Watson"
     },
     {  
        "id_118":"To be successful, you have to have your heart in your business, and your business in your heart.",
        "from":"Thomas J. Watson"
     },
     {  
        "id_119":"If hard work is the key to success, most people would rather pick the lock.",
        "from":"Claude McDonald"
     },
     {  
        "id_120":"Success is simply a matter of luck. Ask any failure.",
        "from":"Earl Wilson"
     },
     {  
        "id_121":"The road to success is always under construction.",
        "from":"Arnold Palmer"
     },
     {  
        "id_122":"Anything the mind can conceive and believe, it can achieve.",
        "from":"Napoleon Hill"
     },
     {  
        "id_123":"Most great people have attained their greatest success just one step beyond their greatest failure.",
        "from":"Napoleon Hill"
     },
     {  
        "id_124":"“Whether you think you can or you can’t, you’re right.",
        "from":"Henry Ford"
     },
     {  
        "id_125":"Failure defeats losers, failure inspires winners.",
        "from":"Robert T. Kiyosaki"
     },
     {  
        "id_126":"I have not failed. I’ve just found 10,000 ways that won’t work.",
        "from":"Thomas Edison"
     },
     {  
        "id_127":"The biggest failure you can have in life is not trying at all.",
        "from":"Emil Motycka"
     },
     {  
        "id_128":"I honestly think it is better to be a failure at something you love than to be a success at something you hate.",
        "from":"George Burns"
     },
     {  
        "id_129":"Leaders don’t force people to follow, they invite them on a journey.",
        "from":"Charles S. Lauer"
     },
     {  
        "id_130":"Example is not the main thing in influencing other people; it’s the only thing.",
        "from":"Abraham Lincoln"
     },
     {  
        "id_131":"Leadership is doing what is right when no one is watching.",
        "from":"George Van Valkenburg"
     },
     {  
        "id_132":"Leadership is the art of getting someone else to do something you want done because he wants to do it.",
        "from":"Dwight D. Eisenhower"
     },
     {  
        "id_133":"The difference between a boss and a leader: a boss says, ‘Go!’ -a leader says, ‘Let’s go!’.",
        "from":"E. M. Kelly"
     },
     {  
        "id_134":"I am more afraid of an army of one hundred sheep led by a lion than an army of one hundred lions led by a sheep.",
        "from":"Charles Maurice"
     },
     {  
        "id_135":"The whole problem with the world is that fools and fanatics are always so certain of themselves, but wiser people so full of doubts.",
        "from":"Bertrand Russell"
     },
     {  
        "id_136":"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        "from":"Aristotle"
     },
     {  
        "id_137":"Cannibals prefer those who have no spines.",
        "from":"Stanislaw Lem"
     },
     {  
        "id_138":"A ship in harbor is safe. But that’s now what ships are built for.",
        "from":"William Shedd"
     },
     {  
        "id_139":"If one does not know to which port one is sailing, no wind is favorable.",
        "from":"Lucius Annaeus Seneca"
     },
     {  
        "id_140":"You miss 100% of the shots you don’t take.",
        "from":"Wayne Gretzky"
     },
     {  
        "id_141":"I’m not a businessman. I’m a business, man.",
        "from":"Jay-Z"
     },
     {  
        "id_142":"The vision must be followed by the venture. It is not enough to stare up the steps – we must step up the stairs.",
        "from":"Vance Hayner"
     },
     {  
        "id_143":"Do not wait to strike until the iron is hot; but make it hot by striking.",
        "from":"William B. Sprague"
     },
     {  
        "id_144":"It’s easier to ask forgiveness than it is to get permission.",
        "from":"Grace Hopper"
     },
     {  
        "id_145":"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
        "from":"Mark Twain"
     },
     {  
        "id_146":"One day your life will flash before your eyes. Make sure it is worth watching.",
        "from":"Mooie"
     },
     {  
        "id_147":"I think it’s wrong that only one company makes the game Monopoly.",
        "from":"Steven Wright"
     },
     {  
        "id_148":"Ever notice how it’s a penny for your thoughts, yet you put in your two-cents? Someone is making a penny on the deal.",
        "from":"Steven Wright"
     },
     {  
        "id_149":"Catch a man a fish, and you can sell it to him. Teach a man to fish, and you ruin a wonderful business opportunity.",
        "from":"Karl (maybe Groucho) Marx"
     },
     {  
        "id_150":"I used to sell furniture for a living. The trouble was, it was my own.",
        "from":"Les Dawson"
     },
     {  
        "id_151":"Marking dynamos for repair $10,000.00—2 hours labor $10.00; knowing where to mark $9,990.00.",
        "from":"Invoice from Charles Steinmetz"
     },
     {  
        "id_152":"By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.",
        "from":"Robert Frost"
     },
     {  
        "id_153":"My son is now an ‘entrepreneur’. That’s what you’re called when you don’t have a job.",
        "from":"Ted Turner"
     },
     {  
        "id_154":"I didn’t go to college, but if I did, I would’ve taken all my tests at a restaurant, ’cause ‘The customer is always right.’",
        "from":"Mitch Hedberg"
     },
     {  
        "id_155":"Formal education will make you a living. Self education will make you a fortune.",
        "from":"Jim Rohn"
     },
     {  
        "id_156":"The greatest reward in becoming a millionaire is not the amount of money that you earn. It is the kind of person that you have to become to become a millionaire in the first place.",
        "from":"Jim Rohn"
     },
     {  
        "id_157":"If you’re not learning while you’re earning, you’re cheating yourself out of the better portion of your compensation.",
        "from":"Napoleon Hill"
     },
     {  
        "id_158":"A business that makes nothing but money is a poor business.",
        "from":"Henry Ford"
     },
     {  
        "id_159":"After a certain point, money is meaningless. It ceases to be the goal. The game is what counts.",
        "from":"Aristotle"
     },
     {  
        "id_160":"I treat business a bit like a computer game. I count money as points. I’m doing really well: making lots of money and lots of points.",
        "from":"Michael Dunlop"
     },
     {  
        "id_161":"All of my friends were doing babysitting jobs. I wanted money without the job.",
        "from":"Adam Horwitz"
     },
     {  
        "id_162":"I don’t pay good wages because I have a lot of money; I have a lot of money because I pay good wages.",
        "from":"Robert Bosch"
     },
     {  
        "id_163":"Lend your friend $20. If he doesn’t pay you back then he’s not your friend. Money well spent.",
        "from":"Ted Nicolas"
     },
     {  
        "id_164":"Money and success don’t change people; they merely amplify what is already there.",
        "from":"Will Smith"
     },
     {  
        "id_165":"The secret of getting ahead is getting started.",
        "from":"Agatha Christie"
     },
     {  
        "id_166":"Hire character. Train skill.",
        "from":"Peter Schultz"
     },
     {  
        "id_167":"In preparing for battle I have always found that plans are useless, but planning is indispensable.",
        "from":"Dwight D. Eisenhower"
     },
     {  
        "id_168":"You’ve got to stop doing all the things that people have tried, tested, and found out don’t work.",
        "from":"Michael Dunlop"
     },
     {  
        "id_169":"I never perfected an invention that I did not think about in terms of the service it might give others… I find out what the world needs, then I proceed to invent.",
        "from":"Thomas Edison"
     },
     {  
        "id_170":"If you’re not making mistakes, then you’re not making decisions.",
        "from":"Catherine Cook"
     },
     {  
        "id_171":"Your most unhappy customers are your greatest source of learning.",
        "from":"Bill Gates"
     },
     {  
        "id_172":"One can get anything if he is willing to help enough others get what they want.",
        "from":"Zig Ziglar"
     },
     {  
        "id_173":"An entrepreneur tends to bite off a little more than he can chew hoping he’ll quickly learn how to chew it.",
        "from":"Roy Ash"
     },
     {  
        "id_174":"The true entrepreneur is a doer, not a dreamer.",
        "from":"Nolan Bushnell"
     },
     {  
        "id_175":"Whenever you are asked if you can do a job, tell ’em, ‘Certainly, I can!’ Then get busy and find out how to do it.",
        "from":"Theodore Roosevelt"
     },
     {  
        "id_176":"Everything started as nothing.",
        "from":"Ben Weissenstein"
     },
     {  
        "id_177":"If you start with nothing and end up with nothing, there’s nothing lost.",
        "from":"Michael Dunlop"
     },
     {  
        "id_178":"Start today, not tomorrow. If anything, you should have started yesterday.",
        "from":"Emil Motycka"
     },
     {  
        "id_179":"Make it happen now, not tomorrow. Tomorrow is a loser’s excuse.",
        "from":"Andrew Fashion"
     },
     {  
        "id_180":"Every day I get up and look through the Forbes list of the richest people in America. If I’m not there, I go to work.",
        "from":"Robert Orben"
     },
     {  
        "id_181":"Entrepreneurship is living a few years of your life like most people won’t, so that you can spend the rest of your life like most people can’t.",
        "from":"Anonymous"
     },
     {  
        "id_182":"Yesterday’s home runs don’t win today’s games.",
        "from":"Babe Ruth"
     },
     {  
        "id_183":"You should always stay hungry. Stay hungry, so you can eat.",
        "from":"Syed Balkhi"
     },
     {  
        "id_184":"If you’re not living life on the edge, you’re taking up too much space.",
        "from":"Anonymous"
     },
     {  
        "id_185":"I wasn’t satisfied just to earn a good living. I was looking to make a statement.",
        "from":"Donald Trump"
     },
     {  
        "id_186":"Opportunity is missed by most people because it is dressed in overalls and looks like work.",
        "from":"Thomas Edison"
     },
     {  
        "id_187":"You must either modify your dreams or magnify your skills.",
        "from":"Jim Rohn"
     },
     {  
        "id_188":"Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.",
        "from":"Mark Twain"
     },
     {  
        "id_199":"Not a single person whose name is worth remembering lived a life of ease.",
        "from":"Ryan P. Allis"
     },
     {  
        "id_190":"If you think that you are going to love something, give it a try. You’re going to kick yourself in the butt for the rest of your life if you don’t.",
        "from":"Joe Penna"
     },
     {  
        "id_191":"The best time to plant a tree is twenty years ago. The second best time is now.",
        "from":"Chinese Proverb"
     },
     {  
        "id_192":"If you want one year of prosperity, grow grain. If you want ten years of prosperity, grow trees. If you want one hundred years of prosperity, grow people.",
        "from":"Chinese Proverb"
     },
     {  
        "id_193":"Vision without action is a daydream. Action without vision is a nightmare.",
        "from":"Japanese Proverb"
     },
     {  
        "id_194":"Sow a thought, reap an action; sow an action, reap a habit; sow a habit, reap a character; sow a character, reap a destiny.",
        "from":"Chinese Proverb"
     },
     {  
        "id_195":"A bad workman blames his tools.",
        "from":"Chinese Proverb"
     },
     {  
        "id_196":"A fall into a ditch makes you wiser.",
        "from":"Chinese Proverb"
     },
     {  
        "id_197":"Defeat isn’t bitter if you don’t swallow it.",
        "from":"Chinese Proverb"
     },
     {  
        "id_198":"The diamond cannot be polished without friction, nor the man perfected without trials.",
        "from":"Chinese Proverb"
     },
     {  
        "id_199":"A jade stone is useless before it is processed; a man is good-for-nothing until he is educated.",
        "from":"Chinese Proverb"
     },
     {  
        "id_200":"A journey of a thousand miles begins with a single step.",
        "from":"Chinese Proverb"
     },
]

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function selectAQuote(QUOTE_FILE){
    const id = getRandomIntInclusive(0,200)
    return QUOTE_FILE[id][`id_${id}`]
}

Array.from(updateBtn).forEach(link=> link.addEventListener('click', putReq));

async function putReq() {
    let num = this.id.slice(19);
    let spanQuote = document.querySelector(`#quote-${num}`).innerText;
    try{
        const response = await fetch("/update", {
            method: "put",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "oldQuote": spanQuote,
                "newQuote": selectAQuote(QUOTE_DATA),
            }),
        })
        const data = await response.json();
        }
    catch(err){
        console.log('Errors with fetch: ', err)
    }
    location.reload();
}

Array.from(deleteBtn).forEach(link=> link.addEventListener('click', deleteReq))

async function deleteReq(){
    let num = this.id.slice(10);
    let spanQuote = document.querySelector(`#quote-${num}`).innerText;
    try{
        const response = await fetch("/delete", {
            method: "delete",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "quote": spanQuote 
            })
        })
        const data = await response.json();
    }
    catch(err){
        console.log(`Error on delete: ${err}`)
    }
    location.reload();
}


