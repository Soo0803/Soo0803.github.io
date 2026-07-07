export const translations = {
  en: {
    layout: {
      skipLink: "Skip to main content",
      metaDescription: "Wei Jie's personal website. Malaysian kid in Shanghai, electrical/computer engineering student, and builder of things."
    },
    hero: {
      hello: "Hi there, welcome in",
      line1: "I'm Wei Jie, and I",
      line2: "like building things",
      line3: "I can't stop thinking about.",
      lede: "A Malaysian kid who somehow ended up in Shanghai. I spend my days teaching robot hands how to move, and my evenings either on a football pitch or lost in whatever idea has its hooks in me that week.",
      ledeHighlight: "I made this little corner of the internet so you could get to know the person, not just the resume.",
      readOn: "read on ↓",
      email: "email",
      github: "github",
      linkedin: "linkedin",
      resume: "resume",
      photoLabel: "Your photo",
      photoHint: "A portrait of you goes here. See the note in the code just above this box."
    },
    about: {
      eyebrow: "A bit about me",
      title: "I grew up switching languages mid-sentence.",
      prose1: "I'm Malaysian, and like a lot of Malaysians I picked up a few languages just by living. English and Mandarin got tangled together at the dinner table, and I never really thought of it as a skill until people started pointing it out.",
      prose2_part1: "I came to Shanghai to study electrical and computer engineering at the ",
      prose2_highlight: "UM-SJTU Joint Institute",
      prose2_part2: ", and I've been here ever since, figuring out what I actually want to do with all of it. The honest answer is that I've never been able to pick a single lane. I love the deep technical stuff, the kind where you have to understand exactly how a machine thinks. But I also love the messier side, taking an idea and turning it into a real thing that real people use, money and mistakes and all.",
      prose3: "So I've spent my degree doing both, and I think that mix is the truest thing about me."
    },
    work: {
      eyebrow: "Things I couldn't leave alone",
      title: "A few of the projects that took over my life for a while.",
      projects: {
        terny: {
          kicker: "The one I'm proudest of",
          title: "Terny",
          meta: "LangChain / LangGraph · 150+ profiles from 70+ sources in under 2 min · 50+ people using it",
          p1_part1: "Finding the right research to work on, or the right professor to work with, is weirdly hard. The information is all out there, just scattered across a hundred faculty pages nobody has time to read. So I built something to read them for me.",
          p1_part2_1: "Terny is a ",
          p1_part2_highlight: "multi-agent system",
          p1_part2_2: " that goes out, reads across dozens of sources, and matches you to research that actually fits. The hard part was getting a team of agents to coordinate without stepping on each other, and making the scraping reliable enough to trust. When it finally clicked and pulled together a clean shortlist in under two minutes, that was a genuinely good day.",
          mediaLabel: "Terny screenshot or demo",
          mediaHint: "A screenshot of the app, or a short demo video. Instructions are in the code just above.",
          noteLabel: "why it exists",
          note: "I got tired of doing the search by hand, so I taught a swarm of little agents to do it for me."
        },
        ecommerce: {
          kicker: "The one that taught me the most",
          title: "A cross-border store that got real",
          meta: "~$110K revenue in 12 months · full P&L ownership",
          p1: "I started a small cross-border e-commerce shop expecting a side project, and instead got a crash course in running an actual business. Sourcing, margins, ads that worked and ads that quietly ate my money, customers who were happy and customers who very much were not.",
          p2_1: "Over a year it grew to around ",
          p2_highlight: "$110K in revenue",
          p2_2: ", and I owned the whole thing end to end. Building software is one kind of hard. Owning a P&L is a completely different one, and I'm glad I learned it while the stakes were still small enough to survive.",
          noteLabel: "the lesson",
          note: "Shipping code is hard. Making the numbers add up at the end of the month is a whole other skill."
        },
        robotHand: {
          kicker: "What I'm doing right now",
          title: "Teaching a robot hand to move like mine",
          meta: "Reinforcement learning · ManiSkill3 · dexterous manipulation",
          p1: "I'm interning at the PAIR lab on dexterous hand teleoperation, which is a fancy way of saying I'm trying to get a robot hand to copy a human hand smoothly and precisely using reinforcement learning. Fingers are deceptively hard. The thumb especially has a way of humbling you.",
          p2: "It's the kind of problem where progress is slow and then suddenly not, and I love that.",
          mediaLabel: "Robot hand video",
          mediaHint: "A short clip of the hand in action is the most convincing thing on this whole page."
        },
        processor: {
          kicker: "For the love of understanding it",
          title: "Building a processor from scratch",
          meta: "RV32IMA · out-of-order · SystemVerilog · capstone team project",
          p1: "For my capstone, my team and I are building a scalar out-of-order RISC-V processor, the kind of design that reorders instructions on the fly to run faster. I own the execution engine, the part that actually does the math. There's no shortcut to understanding how a computer really works other than building one, and that was exactly the point.",
          mediaLabel: "Diagram (optional)",
          mediaHint: "A block diagram of the design, or delete this box if you'd rather keep it text-only.",
          noteLabel: "the itch",
          note: "I wanted to know what's really happening underneath all the abstractions, so I went and built the bottom layer."
        },
        research: {
          kicker: "Hardware-software integration",
          title: "Pneumatic conforming insole prototype",
          meta: "Prof. Shane Johnson's Lab · Raspberry Pi / Arduino · MATLAB / MeshLab · Sept 2023 – Aug 2024",
          p1: "Custom orthoses need to adapt to individual foot shapes, which is difficult with static designs. In Prof. Shane Johnson's lab, we designed and built a prototype insole using a pneumatically actuated conforming ergonomic system.",
          p2: "I took charge of the embedded device programming (Python) and interfaced various microelectronic components using a Raspberry Pi and Arduino microcontroller. To test the prototype, we recruited 15 participants for functional testing, and I analyzed 3D morphology and force data using MATLAB and MeshLab.",
          mediaLabel: "Research photo",
          mediaHint: "A photo of the prototype device, or delete this box if you'd rather keep it text-only.",
          noteLabel: "the device",
          note: "Using pneumatic chambers, we could dynamically adjust the pressure distribution on different parts of the foot."
        }
      }
    },
    beyond: {
      eyebrow: "The rest of me",
      title: "The parts that don't fit on a resume, but explain me better.",
      facets: {
        football: {
          tag: "On the pitch",
          title: "Football",
          prose: "I play competitively and was vice captain of the university varsity team. Leading a group of tired, stubborn, talented people toward one thing taught me more about people than any class did. I was lucky enough to be named an Outstanding Student Athlete in 2025."
        },
        builder: {
          tag: "The thread",
          title: "Builder and operator",
          prose: "If there's one thing that ties all of this together, it's that I like making things exist and then taking care of them. Whether that's code, a business, or a team, the joy is the same."
        }
      },
      currently: {
        tag: "Currently",
        items: [
          "Finishing my degree and my capstone processor, graduating this August",
          "Getting a robot hand to stop fumbling its thumb"
        ]
      },
      gallery: {
        label: "Photo",
        hint1: "On the pitch, maybe.",
        hint2: "Something that's just you."
      }
    },
    contact: {
      eyebrow: "Say hi",
      title: "I'm graduating this August, and figuring out what's next.",
      lede: "I'm open to both worlds I've been living in, building AI and engineering, and the business side of things. If any of this resonated, or you just want to talk football or markets, I'd genuinely love to hear from you.",
      emailMe: "email me",
      downloadResume: "download resume (pdf)"
    },
    footer: {
      fine: "Made by Wei Jie · Shanghai · "
    }
  },
  zh: {
    layout: {
      skipLink: "跳过并阅读主要内容",
      metaDescription: "魏杰的个人网站。在上海的马来西亚小伙，电子与计算机工程系学生，喜欢构建有趣的事物。"
    },
    hero: {
      hello: "你好，欢迎光临",
      line1: "我是 魏杰，我",
      line2: "喜欢构建那些",
      line3: "让我魂牵梦绕的事物。",
      lede: "一个不知怎么就来到了上海的马来西亚小伙。我的白天在教机器人手如何移动，晚上则要么在足球场上，要么沉迷于那一周最吸引我的某个想法。",
      ledeHighlight: "我搭建了这个互联网上的小角落，是为了让你认识我这个人，而不只是一份简历。",
      readOn: "继续阅读 ↓",
      email: "邮件",
      github: "github",
      linkedin: "领英",
      resume: "简历",
      photoLabel: "你的照片",
      photoHint: "这里是你的肖像照。参见代码中的注释。"
    },
    about: {
      eyebrow: "关于我",
      title: "我从小就在一句话里切换几种语言。",
      prose1: "我是马来西亚人。和许多马来西亚人一样，我仅仅在日常生活中就学会了几种语言。英语和普通话在餐桌上混杂在一起，我从来没觉得这是一种技能，直到别人开始指出这一点。",
      prose2_part1: "我来到上海，在交大密西根学院（",
      prose2_highlight: "UM-SJTU Joint Institute",
      prose2_part2: "）学习电子与计算机工程，自那以后就一直待在这里，探索自己到底想用所学做点什么。坦白说，我从来无法只选一条道路。我喜欢深度的技术，那种需要你精确理解机器如何思考的领域；但我也喜欢那些更具挑战性、更“混乱”的一面——将一个想法落地，变成真实的人们会使用的真实产品，哪怕伴随着资金成本和重重失误。",
      prose3: "所以我的大学时光都在这两者之间度过，而我认为这种融合正是最真实的自我。"
    },
    work: {
      eyebrow: "我无法置之不理的事",
      title: "一些在一段时间内占据了我全部生活的项目。",
      projects: {
        terny: {
          kicker: "最令我自豪的项目",
          title: "Terny",
          meta: "LangChain / LangGraph · 2分钟内整理来自70多个来源的150多个档案 · 50+ 活跃用户",
          p1_part1: "寻找合适的研究方向或合作教授难得离奇。所有信息其实都在网上，只是分散在成百上千个教职工页面上，没人有时间去一一阅读。所以我做了一个东西帮我读。",
          p1_part2_1: "Terny 是一个",
          p1_part2_highlight: "多智能体系统",
          p1_part2_2: "，它会自动抓取几十个来源的信息，并将你与最匹配的研究方向进行比对。其中最难的部分是让多个智能体协同工作、互不干扰，并保证数据抓取的可靠性。当它终于跑通并在两分钟内拉出一份干净的候选清单时，那天真的很开心。",
          mediaLabel: "Terny 截图或演示",
          mediaHint: "应用的截图或演示视频。",
          noteLabel: "缘由",
          note: "我厌倦了手动查找，所以教了一群智能体替我做这件事。"
        },
        ecommerce: {
          kicker: "让我收获最多的项目",
          title: "一个做成真玩意的跨境电商",
          meta: "12个月内营收约11万美元 · 全权负责损益表（P&L）",
          p1: "我开了一家小小的跨境电商商店，原本只把它当成副业，却意外得到了一堂关于运营真实商业的速成课。采购、利润率、有些起作用有些又在悄悄烧钱的广告，还有满意的顾客以及极度不满的顾客。",
          p2_1: "在一年多的时间里，它的营收增长到了大约",
          p2_highlight: "11万美元",
          p2_2: "，我自始至终独自负责了全流程。写软件是一种难，而对一张损益表负责则是另一种完全不同的难。我很庆幸自己在代价还不够大时学会了这些。",
          noteLabel: "教训",
          note: "发布代码很难。但让月底的财务数据对齐是另一门截然不同的手艺。"
        },
        robotHand: {
          kicker: "我目前正在做的事",
          title: "教机器人手像我的一样移动",
          meta: "强化学习 · ManiSkill3 · 灵巧操作",
          p1: "我目前正在 PAIR 实验室实习，研究灵巧手遥操作，简单来说就是尝试通过强化学习让机器人手平滑且精确地模仿人类手的动作。手指的控制难得出乎意料，尤其是大拇指，总能让人感到受挫。",
          p2: "这是那种起初进展极其缓慢，然后突然某天就豁然开朗的问题，而我非常享受这个过程。",
          mediaLabel: "机器人手视频",
          mediaHint: "一段机器人手运作的视频片段，这是整个页面上最令人信服的展示。"
        },
        processor: {
          kicker: "出于对底层逻辑的热爱",
          title: "从零开始构建处理器",
          meta: "RV32IMA · 乱序执行 · SystemVerilog · 毕业设计团队项目",
          p1: "作为毕业设计，我和我的团队正在构建一个标量乱序执行的 RISC-V 处理器，这种设计可以在运行时动态调整指令顺序以提高运行速度。我负责执行引擎，也就是真正做数学计算的部分。要真正理解计算机的工作原理，除了亲手做一个别无他法，而这正是这个项目的初衷。",
          mediaLabel: "架构图 (可选)",
          mediaHint: "设计方案的结构框图。",
          noteLabel: "探索",
          note: "我想知道在所有的抽象层之下到底发生了什么，于是我自己去造了最底层。"
        },
        research: {
          kicker: "软硬件协同设计",
          title: "气动自适应人体工学鞋垫原型",
          meta: "Shane Johnson 教授实验室 · 树莓派 / Arduino · MATLAB / MeshLab · 2023年9月 – 2024年8月",
          p1: "传统的定制矫形支具难以适应多变的脚部形状。在 Shane Johnson 教授的实验室中，我们设计并构建了一款基于气动自适应人体工学系统的鞋垫原型。",
          p2: "我负责了嵌入式设备编程（基于 Python），并使用树莓派和 Arduino 微控制器连接了各种微电子元件。为了测试该原型，我们招募了 15 名受试者进行功能性测试，并由我使用 MATLAB 和 MeshLab 分析了三维形态与受力数据。",
          mediaLabel: "研究照",
          mediaHint: "鞋垫原型的照片，如果没有可以删除此框。",
          noteLabel: "设备设计",
          note: "通过气动气室，我们可以动态调节脚部不同区域的压力分布。"
        }
      }
    },
    beyond: {
      eyebrow: "我的其他侧面",
      title: "那些不适合写在简历上，却能更好诠释我是谁的部分。",
      facets: {
        football: {
          tag: "赛场之上",
          title: "足球",
          prose: "我踢竞技足球，曾担任大学校队的副队长。带领一群疲惫、固执却充满才华的人朝着同一个目标前进，这让我学到了比任何课堂都多的“人学”。我很幸运能在2025年被评为优秀学生运动员。"
        },
        builder: {
          tag: "主线",
          title: "构建与运营",
          prose: "如果有一根主线能将所有这一切串联起来，那就是我喜欢让事物“从无到有”，然后再去维护和打理它们。无论是代码、一门生意，还是一支团队，其中的乐趣是相同的。"
        }
      },
      currently: {
        tag: "近况",
        items: [
          "正在完成我的学位和作为毕业设计的处理器，今年八月毕业",
          "教机器人手不再让大拇指笨手笨脚"
        ]
      },
      gallery: {
        label: "照片",
        hint1: "也许是球场上的瞬间。",
        hint2: "一张只属于你自己的照片。"
      }
    },
    contact: {
      eyebrow: "打个招呼",
      title: "我今年八月毕业，正在规划人生的下一阶段。",
      lede: "我对目前所处的两个世界都持开放态度：无论是人工智能与工程构建，还是商业运营方面。如果我的经历引起了你的共鸣，或者你只是想聊聊足球或市场，我真的非常期待你的来信。",
      emailMe: "发送邮件",
      downloadResume: "下载简历 (PDF)"
    },
    footer: {
      fine: "由 魏杰 制作 · 上海 · "
    }
  }
} as const;
