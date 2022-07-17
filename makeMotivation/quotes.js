const QUOTES = [  
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
       "id_114":"There are two rules for success. 1) Never tell everything you know.",
       "from":"Roger H. Lincoln"
    },
    {  
       "id_115":"The only place where success comes before work is in the dictionary.",
       "from":"Vidal Sassoon"
    },
    {  
       "id_116":"Every single person I know who is successful at what they do is successful because they love doing it.",
       "from":"Joe Penna"
    },
    {  
       "id_117":"Being realistic is the most commonly traveled road to mediocrity.",
       "from":"Will Smith"
    },
    {  
       "id_118":"Whenever an individual or a business decides that success has been attained, progress stops.",
       "from":"Thomas J. Watson"
    },
    {  
       "id_119":"To be successful, you have to have your heart in your business, and your business in your heart.",
       "from":"Thomas J. Watson"
    },
    {  
       "id_120":"If hard work is the key to success, most people would rather pick the lock.",
       "from":"Claude McDonald"
    },
    {  
       "id_121":"Success is simply a matter of luck. Ask any failure.",
       "from":"Earl Wilson"
    },
    {  
       "id_122":"The road to success is always under construction.",
       "from":"Arnold Palmer"
    },
    {  
       "id_123":"Anything the mind can conceive and believe, it can achieve.",
       "from":"Napoleon Hill"
    },
    {  
       "id_124":"Most great people have attained their greatest success just one step beyond their greatest failure.",
       "from":"Napoleon Hill"
    },
    {  
       "id_125":"“Whether you think you can or you can’t, you’re right.",
       "from":"Henry Ford"
    },
    {  
       "id_126":"Failure defeats losers, failure inspires winners.",
       "from":"Robert T. Kiyosaki"
    },
    {  
       "id_127":"I have not failed. I’ve just found 10,000 ways that won’t work.",
       "from":"Thomas Edison"
    },
    {  
       "id_128":"The biggest failure you can have in life is not trying at all.",
       "from":"Emil Motycka"
    },
    {  
       "id_129":"I honestly think it is better to be a failure at something you love than to be a success at something you hate.",
       "from":"George Burns"
    },
    {  
       "id_130":"Leaders don’t force people to follow, they invite them on a journey.",
       "from":"Charles S. Lauer"
    },
    {  
       "id_131":"Example is not the main thing in influencing other people; it’s the only thing.",
       "from":"Abraham Lincoln"
    },
    {  
       "id_132":"Leadership is doing what is right when no one is watching.",
       "from":"George Van Valkenburg"
    },
    {  
       "id_133":"Leadership is the art of getting someone else to do something you want done because he wants to do it.",
       "from":"Dwight D. Eisenhower"
    },
    {  
       "id_134":"The difference between a boss and a leader: a boss says, ‘Go!’ -a leader says, ‘Let’s go!’.",
       "from":"E. M. Kelly"
    },
    {  
       "id_135":"I am more afraid of an army of one hundred sheep led by a lion than an army of one hundred lions led by a sheep.",
       "from":"Charles Maurice"
    },
    {  
       "id_136":"The whole problem with the world is that fools and fanatics are always so certain of themselves, but wiser people so full of doubts.",
       "from":"Bertrand Russell"
    },
    {  
       "id_137":"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
       "from":"Aristotle"
    },
    {  
       "id_138":"Cannibals prefer those who have no spines.",
       "from":"Stanislaw Lem"
    },
    {  
       "id_139":"A ship in harbor is safe. But that’s now what ships are built for.",
       "from":"William Shedd"
    },
    {  
       "id_140":"If one does not know to which port one is sailing, no wind is favorable.",
       "from":"Lucius Annaeus Seneca"
    },
    {  
       "id_141":"You miss 100% of the shots you don’t take.",
       "from":"Wayne Gretzky"
    },
    {  
       "id_142":"I’m not a businessman. I’m a business, man.",
       "from":"Jay-Z"
    },
    {  
       "id_143":"The vision must be followed by the venture. It is not enough to stare up the steps – we must step up the stairs.",
       "from":"Vance Hayner"
    },
    {  
       "id_144":"Do not wait to strike until the iron is hot; but make it hot by striking.",
       "from":"William B. Sprague"
    },
    {  
       "id_145":"It’s easier to ask forgiveness than it is to get permission.",
       "from":"Grace Hopper"
    },
    {  
       "id_146":"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
       "from":"Mark Twain"
    },
    {  
       "id_147":"One day your life will flash before your eyes. Make sure it is worth watching.",
       "from":"Mooie"
    },
    {  
       "id_148":"I think it’s wrong that only one company makes the game Monopoly.",
       "from":"Steven Wright"
    },
    {  
       "id_149":"Ever notice how it’s a penny for your thoughts, yet you put in your two-cents? Someone is making a penny on the deal.",
       "from":"Steven Wright"
    },
    {  
       "id_150":"Catch a man a fish, and you can sell it to him. Teach a man to fish, and you ruin a wonderful business opportunity.",
       "from":"Karl (maybe Groucho) Marx"
    },
    {  
       "id_151":"I used to sell furniture for a living. The trouble was, it was my own.",
       "from":"Les Dawson"
    },
    {  
       "id_152":"Marking dynamos for repair $10,000.00—2 hours labor $10.00; knowing where to mark $9,990.00.",
       "from":"Invoice from Charles Steinmetz"
    },
    {  
       "id_153":"By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.",
       "from":"Robert Frost"
    },
    {  
       "id_154":"My son is now an ‘entrepreneur’. That’s what you’re called when you don’t have a job.",
       "from":"Ted Turner"
    },
    {  
       "id_155":"I didn’t go to college, but if I did, I would’ve taken all my tests at a restaurant, ’cause ‘The customer is always right.’",
       "from":"Mitch Hedberg"
    },
    {  
       "id_156":"Formal education will make you a living. Self education will make you a fortune.",
       "from":"Jim Rohn"
    },
    {  
       "id_157":"The greatest reward in becoming a millionaire is not the amount of money that you earn. It is the kind of person that you have to become to become a millionaire in the first place.",
       "from":"Jim Rohn"
    },
    {  
       "id_158":"If you’re not learning while you’re earning, you’re cheating yourself out of the better portion of your compensation.",
       "from":"Napoleon Hill"
    },
    {  
       "id_159":"A business that makes nothing but money is a poor business.",
       "from":"Henry Ford"
    },
    {  
       "id_160":"After a certain point, money is meaningless. It ceases to be the goal. The game is what counts.",
       "from":"Aristotle"
    },
    {  
       "id_161":"I treat business a bit like a computer game. I count money as points. I’m doing really well: making lots of money and lots of points.",
       "from":"Michael Dunlop"
    },
    {  
       "id_162":"All of my friends were doing babysitting jobs. I wanted money without the job.",
       "from":"Adam Horwitz"
    },
    {  
       "id_163":"I don’t pay good wages because I have a lot of money; I have a lot of money because I pay good wages.",
       "from":"Robert Bosch"
    },
    {  
       "id_164":"Lend your friend $20. If he doesn’t pay you back then he’s not your friend. Money well spent.",
       "from":"Ted Nicolas"
    },
    {  
       "id_165":"Money and success don’t change people; they merely amplify what is already there.",
       "from":"Will Smith"
    },
    {  
       "id_166":"The secret of getting ahead is getting started.",
       "from":"Agatha Christie"
    },
    {  
       "id_167":"Hire character. Train skill.",
       "from":"Peter Schultz"
    },
    {  
       "id_168":"In preparing for battle I have always found that plans are useless, but planning is indispensable.",
       "from":"Dwight D. Eisenhower"
    },
    {  
       "id_169":"You’ve got to stop doing all the things that people have tried, tested, and found out don’t work.",
       "from":"Michael Dunlop"
    },
    {  
       "id_170":"I never perfected an invention that I did not think about in terms of the service it might give others… I find out what the world needs, then I proceed to invent.",
       "from":"Thomas Edison"
    },
    {  
       "id_171":"If you’re not making mistakes, then you’re not making decisions.",
       "from":"Catherine Cook"
    },
    {  
       "id_172":"Your most unhappy customers are your greatest source of learning.",
       "from":"Bill Gates"
    },
    {  
       "id_173":"One can get anything if he is willing to help enough others get what they want.",
       "from":"Zig Ziglar"
    },
    {  
       "id_174":"An entrepreneur tends to bite off a little more than he can chew hoping he’ll quickly learn how to chew it.",
       "from":"Roy Ash"
    },
    {  
       "id_175":"The true entrepreneur is a doer, not a dreamer.",
       "from":"Nolan Bushnell"
    },
    {  
       "id_176":"Whenever you are asked if you can do a job, tell ’em, ‘Certainly, I can!’ Then get busy and find out how to do it.",
       "from":"Theodore Roosevelt"
    },
    {  
       "id_177":"Everything started as nothing.",
       "from":"Ben Weissenstein"
    },
    {  
       "id_178":"If you start with nothing and end up with nothing, there’s nothing lost.",
       "from":"Michael Dunlop"
    },
    {  
       "id_179":"Start today, not tomorrow. If anything, you should have started yesterday.",
       "from":"Emil Motycka"
    },
    {  
       "id_180":"Make it happen now, not tomorrow. Tomorrow is a loser’s excuse.",
       "from":"Andrew Fashion"
    },
    {  
       "id_181":"Every day I get up and look through the Forbes list of the richest people in America. If I’m not there, I go to work.",
       "from":"Robert Orben"
    },
    {  
       "id_182":"Entrepreneurship is living a few years of your life like most people won’t, so that you can spend the rest of your life like most people can’t.",
       "from":"Anonymous"
    },
    {  
       "id_183":"Yesterday’s home runs don’t win today’s games.",
       "from":"Babe Ruth"
    },
    {  
       "id_184":"You should always stay hungry. Stay hungry, so you can eat.",
       "from":"Syed Balkhi"
    },
    {  
       "id_185":"If you’re not living life on the edge, you’re taking up too much space.",
       "from":"Anonymous"
    },
    {  
       "id_186":"I wasn’t satisfied just to earn a good living. I was looking to make a statement.",
       "from":"Donald Trump"
    },
    {  
       "id_187":"Opportunity is missed by most people because it is dressed in overalls and looks like work.",
       "from":"Thomas Edison"
    },
    {  
       "id_188":"You must either modify your dreams or magnify your skills.",
       "from":"Jim Rohn"
    },
    {  
       "id_189":"Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.",
       "from":"Mark Twain"
    },
    {  
       "id_190":"Not a single person whose name is worth remembering lived a life of ease.",
       "from":"Ryan P. Allis"
    },
    {  
       "id_191":"If you think that you are going to love something, give it a try. You’re going to kick yourself in the butt for the rest of your life if you don’t.",
       "from":"Joe Penna"
    },
    {  
       "id_192":"The best time to plant a tree is twenty years ago. The second best time is now.",
       "from":"Chinese Proverb"
    },
    {  
       "id_193":"If you want one year of prosperity, grow grain. If you want ten years of prosperity, grow trees. If you want one hundred years of prosperity, grow people.",
       "from":"Chinese Proverb"
    },
    {  
       "id_194":"Vision without action is a daydream. Action without vision is a nightmare.",
       "from":"Japanese Proverb"
    },
    {  
       "id_195":"Sow a thought, reap an action; sow an action, reap a habit; sow a habit, reap a character; sow a character, reap a destiny.",
       "from":"Chinese Proverb"
    },
    {  
       "id_196":"A bad workman blames his tools.",
       "from":"Chinese Proverb"
    },
    {  
       "id_197":"A fall into a ditch makes you wiser.",
       "from":"Chinese Proverb"
    },
    {  
       "id_198":"Defeat isn’t bitter if you don’t swallow it.",
       "from":"Chinese Proverb"
    },
    {  
       "id_199":"The diamond cannot be polished without friction, nor the man perfected without trials.",
       "from":"Chinese Proverb"
    },
    {  
       "id_200":"A jade stone is useless before it is processed; a man is good-for-nothing until he is educated.",
       "from":"Chinese Proverb"
    },
    {  
       "id_201":"A journey of a thousand miles begins with a single step.",
       "from":"Chinese Proverb"
    },
    {  
       "id_202":"The loftiest towers rise from the ground.",
       "from":"Chinese Proverb"
    },
    {  
       "id_203":"Building a castle is difficult. Defending and maintaining it is harder still.",
       "from":"Asian Proverb"
    },
    {  
       "id_204":"A person who says it cannot be done should not interrupt the man doing it.",
       "from":"Chinese Proverb"
    },
    {  
       "id_205":"All cats love fish but fear to wet their paws.",
       "from":"Chinese Proverb"
    },
    {  
       "id_206":"Don’t stand by the water and long for fish; go home and weave a net.",
       "from":"Chinese Proverb"
    },
    {  
       "id_207":"Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength.",
       "from":"Hasidic Proverb"
    },
    {  
       "id_208":"Failing to plan is planning to fail.",
       "from":"Chinese Proverb"
    },
    {  
       "id_209":"If you pay peanuts, you get monkeys.",
       "from":"Chinese Proverb"
    },
    {  
       "id_210":"Make happy those who are near, and those who are far will come.",
       "from":"Chinese Proverb"
    },
    {  
       "id_211":"Teachers open the door. You enter by yourself.",
       "from":"Chinese Proverb"
    },
    {  
       "id_212":"Find a job you love and you’ll never work a day in your life.",
       "from":"Confucius"
    },
    {  
       "id_213":"The entrepreneur builds an enterprise; the technician builds a job.",
       "from":"Michael Gerber"
    },
    {  
       "id_214":"If you want to be inventive",
       "from":"you have to be willing to fail.”"
    },
    {  
       "id_215":"The challenge is not just to build a company that can endure; but to build one that is worthy of enduring.",
       "from":"Jim Collins"
    },
    {  
       "id_216":"Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
       "from":"Bill Gates"
    },
    {  
       "id_217":"Don’t treat your customers like a bunch of purses and wallets.",
       "from":"Chris Brogan"
    },
    {  
       "id_218":"Nine out of ten businesses fail; so I came up with a foolproof plan",
       "from":"create ten businesses.”"
    },
    {  
       "id_219":"I’m not a businessman",
       "from":"I”m a business, man.”"
    },
    {  
       "id_220":"If plan ‘A’ fails",
       "from":"remember you have 25 letters left.”"
    },
    {  
       "id_221":"We make a living by what we get. But we make a life by what we give.",
       "from":"Winston Churchhill"
    },
    {  
       "id_222":"Believe that you will succeed",
       "from":"and you will.”"
    },
    {  
       "id_223":"Victory comes only after many struggles and countless defeats.",
       "from":"Og Mandino"
    },
    {  
       "id_224":"As long as you’re going to be thinking anyway, think big.",
       "from":"Donald Trump"
    },
    {  
       "id_225":"Success is how high you bounce after you hit bottom",
       "from":"General George Patton"
    },
    {  
       "id_226":"Remembering you are going to die is the best way I know to avoid the trap of thinking you have something to lose.",
       "from":"Steve Jobs"
    },
    {  
       "id_227":"It’s not about how to get started; its about how to get noticed.",
       "from":"Steve Case"
    },
    {  
       "id_228":"A ship in harbor is safe, but that’s not what ships are for.",
       "from":"John Shedd"
    },
    {  
       "id_229":"If I find 10,000 ways something won’t work, I haven’t failed. I am not discouraged, because every wrong attempt discarded is often a step forward.",
       "from":"Thomas Edison"
    },
    {  
       "id_230":"Business opportunities are like buses, there’s always another one coming.",
       "from":"Richard Branson"
    },
    {  
       "id_231":"If we don’t allow ourselves to make mistakes, we will never invest in things that are radical.",
       "from":"Jeff Clavier"
    },
    {  
       "id_232":"The critical ingredient is getting off your butt and doing something.",
       "from":"Nolan Bushnell"
    },
    {  
       "id_233":"Nothing will work unless you do.",
       "from":"Maya Angelou"
    },
    {  
       "id_234":"Try not to be a man of success, but rather try to become a man of value.",
       "from":"Albert Einstein"
    },
    {  
       "id_235":"You won’t get anything unless you have the vision to imagine it.",
       "from":"John Lennon"
    },
    {  
       "id_236":"A man must be big enough to admit his mistakes, smart enough to profit from them, and strong enough to correct them.",
       "from":"John C. Maxwell"
    },
    {  
       "id_237":"In the modern world of business, it is useless to be a creative, original thinker unless you can also sell what you create.",
       "from":"David Ogilvy"
    },
    {  
       "id_238":"Success is doing what you want, where you want, when you want, with whom you want as much as you want.",
       "from":"Tony Robbins"
    },
    {  
       "id_239":"If you don’t have a competitive advantage",
       "from":"don’t compete.”"
    },
    {  
       "id_240":"You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.",
       "from":"Zig Ziglar"
    },
    {  
       "id_241":"If everything seems under control, you’re just not going fast enough.",
       "from":"Mario Andretti"
    },
    {  
       "id_242":"Don’t be trapped by dogma",
       "from":"which is living with the results of other people’s thinking.”"
    },
    {  
       "id_243":"Do or do not. There is no try.",
       "from":"Yoda"
    },
    {  
       "id_244":"Show me a person who never made a mistake, and I will show you a person who never did anything.",
       "from":"William Rosenberg, founder of Dunkin’ Donuts"
    },
    {  
       "id_245":"Ideas are commodity. Execution of them is not.",
       "from":"Michael Dell, CEO of Dell"
    },
    {  
       "id_246":"User experience is everything. It always has been, but it’s undervalued and underinvested in. If you don’t know user-centered design, study it. Hire people who know it. Obsess over it. Live and breathe it. Get your whole company on board.",
       "from":"Evan Williams, co-founder of Twitter"
    },
    {  
       "id_247":"A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
       "from":"Winston Churchill, British Prime Minister"
    },
    {  
       "id_248":"The man who does not work for the love of work but only for money is likely to neither make money nor find much fun in life.",
       "from":"Charles M. Schwab, American steel magnate"
    },
    {  
       "id_249":"Be undeniably good. No marketing effort or social media buzzword can be a substitute for that.",
       "from":"Anthony Volodkin, founder of Hype Machine"
    },
    {  
       "id_250":"Ideas are easy. Implementation is hard.",
       "from":"Guy Kawasaki, founder of AllTop"
    },
    {  
       "id_251":"You can say anything to anyone, but how you say it will determine how they will react.",
       "from":"John Rampton, entrepreneur and investor"
    },
    {  
       "id_252":"Always deliver more than expected.",
       "from":"Larry Page, co-founder of Google"
    },
    {  
       "id_253":"Assume you have 90 seconds with a new user before they decide to use your app or delete it.",
       "from":"Tamara Steffens, Acompli"
    },
    {  
       "id_254":"Even if you don’t have the perfect idea to begin with, you can likely adapt.",
       "from":"Victoria Ransom, co-founder of Wildfire Interactive"
    },
    {  
       "id_255":"Make your team feel respected, empowered and genuinely excited about the company’s mission.",
       "from":"Tim Westergen, founder of Pandora"
    },
    {  
       "id_256":"Stay self-funded as long as possible.",
       "from":"Garrett Camp, co-founder of Stumbleupon"
    },
    {  
       "id_257":"In between goals is a thing called life, that has to be lived and enjoyed.",
       "from":"Sid Caesar, Entertainer"
    },
    {  
       "id_258":"Wonder what your customer really wants? Ask. Don’t tell.",
       "from":"Lisa Stone, co-founder of BlogHer"
    },
    {  
       "id_259":"When times are bad is when the real entrepreneurs emerge.",
       "from":"Robert Kiyosaki, author of Rich Dad Poor Dad"
    },
    {  
       "id_260":"What do you need to start a business? Three simple things: know your product better than anyone, know your customer, and have a burning desire to succeed.",
       "from":"Dave Thomas, founder of Wendy’s"
    },
    {  
       "id_261":"Get big quietly, so you don’t tip off potential competitors.",
       "from":"Chris Dixon, co-founder of Hunch"
    },
    {  
       "id_262":"Don’t worry about failure; you only have to be right once.",
       "from":"Drew Houston, founder of Dropbox"
    },
    {  
       "id_263":"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma",
       "from":"which is living with the results of other people’s thinking. Don’t let the noise of other’s opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.”"
    },
    {  
       "id_264":"Don’t be cocky. Don’t be flashy. There’s always someone better than you.",
       "from":"Tony Hsieh, Zappos.com CEO"
    },
    {  
       "id_265":"Don’t take too much advice. Most people who have a lot of advice to give — with a few exceptions — generalize whatever they did. Don’t over-analyze everything. I myself have been guilty of over-thinking problems. Just build things and find out if they work.",
       "from":"Ben Silbermann, co-founder of Pinterest"
    },
    {  
       "id_266":"Openly share and talk to people about your idea. Use their lack of interest or doubt to fuel your motivation to make it happen.",
       "from":"Todd Garland, founder of BuySellAds"
    },
    {  
       "id_267":"How you climb a mountain is more important than reaching the top.",
       "from":"Yvon Chouinard, founder of Patagonia"
    },
    {  
       "id_268":"Associate yourself with people of good quality, for it is better to be alone than in bad company.",
       "from":"Booker T. Washington, Educator and author"
    },
    {  
       "id_269":"It’s fine to celebrate success but it is more important to heed the lessons of failure.",
       "from":"Bill Gates, co-founder of Microsoft"
    },
    {  
       "id_270":"It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently.",
       "from":"Warren Buffett, Investor"
    },
    {  
       "id_271":"Statistics suggest that when customers complain, business owners and managers ought to get excited about it. The complaining customer represents a huge opportunity for more business.",
       "from":"Zig Ziglar, author and motivational speaker"
    },
    {  
       "id_272":"There is only one success- to be able to spend your life in your own way.",
       "from":"Christopher Morley, journalist"
    },
    {  
       "id_273":"Formal education will make you a living; self-education will make you a fortune.",
       "from":"Jim Rohn, author and speaker"
    },
    {  
       "id_274":"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
       "from":"Henry Ford, founder of Ford Motor Company"
    },
    {  
       "id_275":"Rarely have I seen a situation where doing less than the other guy is a good strategy.",
       "from":"Jimmy Spithill, Australian yachtsman"
    },
    {  
       "id_276":"You miss 100 percent of the shots you don’t take.",
       "from":"Wayne Gretzky, NHL Hall of Famer"
    },
    {  
       "id_277":"The best time to plant a tree was 20 years ago. The second best time is now.",
       "from":"Chinese proverb"
    },
    {  
       "id_278":"The secret to successful hiring is this: look for the people who want to change the world.",
       "from":"Marc Benioff, CEO of Salesforce"
    },
    {  
       "id_279":"Twenty years from now, you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
       "from":"Mark Twain, author"
    },
    {  
       "id_280":"If you’ve got an idea, start today. There’s no better time than now to get going. That doesn’t mean quit your job and jump into your idea 100% from day one, but there’s always small progress that can be made to start the movement.",
       "from":"Kevin Systrom, co-founder of Instagram"
    },
    {  
       "id_281":"It’s almost always harder to raise capital than you thought it would be, and it always takes longer. So plan for that.",
       "from":"Richard Harroch, Venture Capitalist"
    },
    {  
       "id_282":"For all of the most important things, the timing always sucks. Waiting for a good time to quit your job? The stars will never align and the traffic lights of life will never all be green at the same time. The universe doesn’t conspire against you, but it doesn’t go out of its way to line up the pins either. Conditions are never perfect. “Someday is a disease that will take your dreams to the grave with you. Pro and con lists are just as bad. If it’s important to you and you want to do it “eventually, just do it and correct course along the way.",
       "from":"Timothy Ferriss, author of The 4-Hour Work Week"
    },
    {  
       "id_283":"I don’t have big ideas. I sometimes have small ideas, which seem to work out.",
       "from":"Matt Mullenweg, founder of Automattic"
    },
    {  
       "id_284":"Fail often so you can succeed sooner.",
       "from":"Tom Kelley, Ideo partner"
    },
    {  
       "id_285":"When you cease to dream you cease to live.",
       "from":"Malcolm Forbes, chairman and editor in chief of Forbes Magazine"
    },
    {  
       "id_286":"Whatever the mind can conceive and believe, the mind can achieve.",
       "from":"Dr. Napoleon Hill, author of Think and Grow Rich"
    },
    {  
       "id_287":"Running a start-up is like eating glass. You just start to like the taste of your own blood.",
       "from":"Sean Parker, co-founder of Napster"
    },
    {  
       "id_288":"My number one piece of advice is: you should learn how to program.",
       "from":"Mark Zuckerberg, founder of Facebook"
    },
    {  
       "id_289":"The way to get started is to quit talking and begin doing.",
       "from":"Walt Disney, co-founder of the Walt Disney Company"
    },
    {  
       "id_290":"The pace of change for entrepreneurs is rapidly accelerating, and the cost and risk of launching a new business and getting off the ground is just amazing. The ability to gain user feedback really quickly and adapt to what your consumers want is totally different with the web as it is now. But finding a new market, helping people and taking that original idea and turning it into a business is really exciting right now.",
       "from":"Matt Mickiewicz, co-founder of 99 Designs"
    },
    {  
       "id_291":"Building and hanging on to an audience is the biggest role of social media.",
       "from":"Matthew Inman, The Oatmeal"
    },
    {  
       "id_292":"Every feature has some maintenance cost, and having fewer features lets us focus on the ones we care about and make sure they work very well.",
       "from":"David Karp, founder of Tumblr"
    },
    {  
       "id_293":"A poorly implemented feature hurts more than not having it at all.",
       "from":"Noah Everett, founder of Twitpic"
    },
    {  
       "id_294":"This defines entrepreneur and entrepreneurship",
       "from":"the entrepreneur always searches for change, responds to it, and exploits it as an opportunity.”― Peter F. Drucker, educator and author"
    },
    {  
       "id_295":"You don’t learn to walk by following rules. You learn by doing and falling over.",
       "from":"Richard Branson, founder of Virgin Group"
    },
    {  
       "id_296":"The fastest way to change yourself is to hang out with people who are already the way you want to be.",
       "from":"Reid Hoffman, co-founder of Linkedin"
    },
    {  
       "id_297":"Risk more than others think is safe. Dream more than others think is practical.",
       "from":"Howard Schultz, CEO of Starbucks"
    },
    {  
       "id_298":"You shouldn’t focus on why you can’t do something, which is what most people do. You should focus on why perhaps you can, and be one of the exceptions.",
       "from":"Steve Case, co-founder of AOL"
    },
    {  
       "id_299":"The critical ingredient is getting off your butt and doing something. It’s as simple as that. A lot of people have ideas, but there are few who decide to do something about them now. Not tomorrow. Not next week. But today. The true entrepreneur is a doer not a dreamer.",
       "from":"Nolan Bushnell, founder of Atari"
    },
    {  
       "id_300":"If you cannot do great things, do small things in a great way.",
       "from":"Napoleon Hill, author"
    },
    {  
       "id_301":"Success is not what you have, but who you are.",
       "from":"Bo Bennet, author and entreprenuer"
    },
    {  
       "id_302":"One of the huge mistakes people make is that they try to force an interest on themselves. You don’t choose your passions; your passions choose you.",
       "from":"Jeff Bezos, founder and CEO of Amazon.com"
    },
    {  
       "id_303":"Lots of companies don’t succeed over time. What do they fundamentally do wrong? They usually miss the future.",
       "from":"Larry Page, CEO of Google"
    },
    {  
       "id_304":"It takes humility to realize that we don’t know everything, not to rest on our laurels and know that we must keep learning and observing. If we don’t, we can be sure some startup will be there to take our place.",
       "from":"Cher Wang, CEO of HTC"
    },
    {  
       "id_305":"There’s an entrepreneur right now, scared to death, making excuses, saying, ‘It’s not the right time just yet.’ There’s no such thing as a good time. Get out of your garage and go take a chance, and start your business.",
       "from":"Kevin Plank, CEO of Under Armour"
    },
    {  
       "id_306":"Be really picky with your hiring, and hire the absolute best people you possibly can. People are the most important component of almost every business, and attracting the best talent possible is going to make a huge difference.",
       "from":"Peter Berg, founder of October Three"
    },
    {  
       "id_307":"Worry about being better; bigger will take care of itself. Think one customer at a time and take care of each one the best way you can.",
       "from":"Gary Comer, founder of Land’s End"
    },
    {  
       "id_308":"You have a viable business only if your product is either better or cheaper than the alternatives. If it’s not one or the other, you might make some money at first, but it’s not a sustainable business.",
       "from":"Jim Koch, founder of Boston Beer Co."
    },
    {  
       "id_309":"Every time I took these bigger risks, the opportunity for a bigger payout was always there.",
       "from":"Casey Neistat, filmmaker"
    },
    {  
       "id_310":"If you can do something to get somebody excited — not everybody — but if you can be the best for somebody, then you can win.",
       "from":"Ron Shaich, founder and CEO of Panera Bread"
    },
    {  
       "id_311":"Would you like me to give you a formula for success? It’s quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn’t at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that’s where you will find success.",
       "from":"Thomas J. Watson, businessman"
    },
    {  
       "id_312":"People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.",
       "from":"Tony Robbins, motivational speaker"
    },
    {  
       "id_313":"The only limit to our realization of tomorrow will be our doubts of today.",
       "from":"Franklin D. Roosevelt"
    },
    {  
       "id_314":"The successful warrior is the average man, with laser-like focus.",
       "from":"Bruce Lee, actor and martial arts instructor"
    },
    {  
       "id_315":"Fall seven times and stand up eight.",
       "from":"Japanese proverb"
    },
    {  
       "id_316":"The successful man is the one who finds out what is the matter with his business before his competitors do.",
       "from":"Roy L. Smith, animator and film director"
    },
    {  
       "id_317":"There’s no shortage of remarkable ideas, what’s missing is the will to execute them.",
       "from":"Seth Godin, author and speaker"
    },
    {  
       "id_318":"Keep on going, and the chances are that you will stumble on something, perhaps when you are least expecting it. I never heard of anyone ever stumbling on something sitting down.",
       "from":"Charles F. Kettering, inventor"
    },
    {  
       "id_319":"A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
       "from":"David Brinkley, newscaster"
    },
    {  
       "id_320":"Everyone is a genius. But if you judge a fish by its ability to climb a tree, it will spend its whole life believing it is stupid.",
       "from":"Albert Einstein, Theoretical Physicist"
    },
    {  
       "id_321":"Success in business requires training and discipline and hard work. But if you’re not frightened by these things, the opportunities are just as great today as they ever were.",
       "from":"David Rockefeller, American banker"
    },
    {  
       "id_322":"It is never too late to be what you might have been.",
       "from":"George Eliot, journalist and novelist"
    },
    {  
       "id_323":"I am not a product of my circumstances. I am a product of my decisions.",
       "from":"Stephen Covey, author and businessman"
    },
    {  
       "id_324":"There is only one way to avoid criticism: Do nothing, say nothing, and be nothing.",
       "from":"Aristotle, Greek philosopher"
    },
    {  
       "id_325":"Build your own dreams, or someone else will hire you to build theirs.",
       "from":"Farrah Gray, investor and motivational speaker"
    },
    {  
       "id_326":"You may be disappointed if you fail, but you are doomed if you don’t try.",
       "from":"Beverly Sills, operatic soprano"
    }
 ]

 module.exports= (QUOTES)