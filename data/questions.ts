export const ivySchools = [
  "harvard",
  "yale",
  "princeton",
  "columbia",
  "penn",
  "brown",
  "dartmouth",
  "cornell",
] as const;

export type IvySchoolKey = (typeof ivySchools)[number];

export type QuestionOption = {
  id: string;
  label: string;
  points: Partial<Record<IvySchoolKey, number>>;
};

export type Question = {
  id: number;
  title: string;
  options: QuestionOption[];
};

export type QuizMode = "normal" | "fun";

const normalQuestions: Question[] = [
  {
    id: 1,
    title: "你理想中的校园节奏更像哪一种？ / Which campus pace fits you best?",
    options: [
      {
        id: "1a",
        label: "机会密集、活动频繁、节奏快 / Opportunity-dense and fast-paced",
        points: { harvard: 3, columbia: 2, penn: 1 },
      },
      {
        id: "1b",
        label: "学术强度高，强调深度研究 / High rigor with deep research focus",
        points: { princeton: 3, yale: 2, cornell: 1 },
      },
      {
        id: "1c",
        label: "自由探索，按兴趣组合课程 / Flexible exploration and self-designed path",
        points: { brown: 3, yale: 1, dartmouth: 1 },
      },
      {
        id: "1d",
        label: "社群紧密，归属感强 / Tight-knit community and belonging",
        points: { dartmouth: 3, brown: 1, cornell: 1 },
      },
    ],
  },
  {
    id: 2,
    title: "你更看重哪类大学资源？ / What campus resources matter most to you?",
    options: [
      {
        id: "2a",
        label: "全球校友网络与高影响力平台 / Global alumni network and high-impact platform",
        points: { harvard: 3, columbia: 2, penn: 1 },
      },
      {
        id: "2b",
        label: "跨学科创新与商业实践机会 / Interdisciplinary innovation and business practice",
        points: { penn: 3, columbia: 2, cornell: 1 },
      },
      {
        id: "2c",
        label: "小班研讨与人文艺术资源 / Seminar-style classes and humanities resources",
        points: { yale: 3, brown: 2, dartmouth: 1 },
      },
      {
        id: "2d",
        label: "科研传统强，学科深耕明确 / Strong research tradition and academic depth",
        points: { princeton: 3, cornell: 2, harvard: 1 },
      },
    ],
  },
  {
    id: 3,
    title: "如果要选实习与研究方向，你更倾向？ / Which internship-research direction do you prefer?",
    options: [
      {
        id: "3a",
        label: "金融或咨询等高竞争路径 / Competitive finance or consulting track",
        points: { penn: 3, harvard: 2, columbia: 2 },
      },
      {
        id: "3b",
        label: "政策、法律或公共事务方向 / Policy, law, or public affairs",
        points: { harvard: 3, yale: 2, princeton: 1 },
      },
      {
        id: "3c",
        label: "基础研究与长期学术发展 / Fundamental research and PhD path",
        points: { princeton: 3, cornell: 2, yale: 1 },
      },
      {
        id: "3d",
        label: "跨领域探索，方向可动态调整 / Cross-domain exploration with flexible direction",
        points: { brown: 3, dartmouth: 2, columbia: 1 },
      },
    ],
  },
  {
    id: 4,
    title: "你更喜欢哪种校园地理和生活方式？ / What campus setting and lifestyle do you prefer?",
    options: [
      {
        id: "4a",
        label: "城市中心，高流动机会环境 / NYC pulse and instant opportunities",
        points: { columbia: 3, penn: 2, harvard: 1 },
      },
      {
        id: "4b",
        label: "经典校园与城市资源兼具 / Classic campus with city-resource balance",
        points: { harvard: 3, yale: 2, princeton: 1 },
      },
      {
        id: "4c",
        label: "安静学院环境，重学习与社群 / Quiet college town for focus and community",
        points: { dartmouth: 3, princeton: 2, brown: 1 },
      },
      {
        id: "4d",
        label: "大型综合校，资源广泛多元 / Large comprehensive university with broad options",
        points: { cornell: 3, penn: 1, columbia: 1 },
      },
    ],
  },
  {
    id: 5,
    title: "你希望毕业后的主线发展更接近？ / Which post-grad trajectory suits you best?",
    options: [
      {
        id: "5a",
        label: "高影响力领导与平台型角色 / High-impact leadership and elite platforms",
        points: { harvard: 3, princeton: 2, penn: 1 },
      },
      {
        id: "5b",
        label: "创意表达、人文深造或公共叙事 / Creative expression and humanities path",
        points: { yale: 3, brown: 2, columbia: 1 },
      },
      {
        id: "5c",
        label: "创业、产品与技术实战路径 / Startup, product, and tech-driven path",
        points: { penn: 3, cornell: 2, columbia: 1 },
      },
      {
        id: "5d",
        label: "重视长期成长与稳定关系网络 / Steady growth with community and long-term ties",
        points: { dartmouth: 3, cornell: 1, yale: 1 },
      },
    ],
  },
  {
    id: 6,
    title: "你更偏好的课堂体验是？ / What classroom experience do you prefer?",
    options: [
      {
        id: "6a",
        label: "案例密集，强调现实决策 / Case-heavy discussions and real-world decisions",
        points: { penn: 3, columbia: 2, harvard: 1 },
      },
      {
        id: "6b",
        label: "深度研讨，重理论与论证 / Deep seminars with theory and argumentation",
        points: { princeton: 3, yale: 2, harvard: 1 },
      },
      {
        id: "6c",
        label: "开放选课，自主配置学习路径 / Open curriculum and self-composed study plan",
        points: { brown: 3, cornell: 1, dartmouth: 1 },
      },
      {
        id: "6d",
        label: "教授互动紧密，社区感明显 / Close faculty interaction and strong community",
        points: { dartmouth: 3, yale: 1, brown: 1 },
      },
    ],
  },
  {
    id: 7,
    title: "面对压力和高强度任务，你通常会？ / Under pressure, what is your typical approach?",
    options: [
      {
        id: "7a",
        label: "主动整合资源并快速推进 / Mobilize resources and drive fast execution",
        points: { harvard: 3, penn: 2, columbia: 1 },
      },
      {
        id: "7b",
        label: "拆分问题，按计划稳步执行 / Break problems down and execute with structure",
        points: { princeton: 3, cornell: 2, yale: 1 },
      },
      {
        id: "7c",
        label: "保持弹性，边做边调整路径 / Stay adaptive and iterate while doing",
        points: { brown: 3, columbia: 1, penn: 1 },
      },
      {
        id: "7d",
        label: "先稳住节奏，再借助熟悉协作网络 / Stabilize rhythm and rely on trusted support",
        points: { dartmouth: 3, yale: 1, cornell: 1 },
      },
    ],
  },
  {
    id: 8,
    title: "你理想中的同学群体更像？ / What peer culture feels ideal to you?",
    options: [
      {
        id: "8a",
        label: "目标驱动明显，竞争感较强 / Highly driven peers chasing top opportunities",
        points: { harvard: 3, penn: 2, columbia: 1 },
      },
      {
        id: "8b",
        label: "思辨表达突出，讨论氛围浓厚 / Strong debate and expressive discussion culture",
        points: { yale: 3, princeton: 2, brown: 1 },
      },
      {
        id: "8c",
        label: "背景多样、包容度高、鼓励尝试 / Diverse and inclusive with experimentation",
        points: { brown: 3, cornell: 2, columbia: 1 },
      },
      {
        id: "8d",
        label: "关系紧密，归属感与熟悉感强 / Close-knit community with strong belonging",
        points: { dartmouth: 3, yale: 1, cornell: 1 },
      },
    ],
  },
  {
    id: 9,
    title: "如果参加课外活动，你更可能选？ / Which extracurriculars would you likely choose?",
    options: [
      {
        id: "9a",
        label: "创业社团、投资俱乐部、商业竞赛 / Startup clubs, investing, business competitions",
        points: { penn: 3, harvard: 2, columbia: 1 },
      },
      {
        id: "9b",
        label: "辩论、写作与公共事务组织 / Debate, writing, public affairs organizations",
        points: { yale: 3, harvard: 2, princeton: 1 },
      },
      {
        id: "9c",
        label: "科研实验室、学术项目或竞赛队 / Research labs and academic competition teams",
        points: { princeton: 3, cornell: 2, harvard: 1 },
      },
      {
        id: "9d",
        label: "户外活动、社区服务与兴趣社群 / Outdoor programs, service, and interest communities",
        points: { dartmouth: 3, brown: 2, cornell: 1 },
      },
    ],
  },
  {
    id: 10,
    title: "你最看重大学四年的最终收获是？ / What outcome matters most from your 4 college years?",
    options: [
      {
        id: "10a",
        label: "高影响力平台与职业势能 / Enter high-impact platforms and scale influence",
        points: { harvard: 3, columbia: 2, penn: 1 },
      },
      {
        id: "10b",
        label: "扎实学术能力与长期研究潜力 / Build strong academic foundations for long-term research",
        points: { princeton: 3, yale: 2, cornell: 1 },
      },
      {
        id: "10c",
        label: "明确个人方向与独特路径 / Discover a uniquely suitable personal direction",
        points: { brown: 3, dartmouth: 1, yale: 1 },
      },
      {
        id: "10d",
        label: "稳定的人脉与可持续支持网络 / Build dependable networks for stable growth",
        points: { dartmouth: 3, penn: 1, cornell: 1 },
      },
    ],
  },
];

const funQuestions: Question[] = [
  {
    id: 1,
    title: "你想要的大学日常更像哪部剧？ / Which campus vibe is your TV show?",
    options: [
      {
        id: "1a",
        label: "一天 12 场 coffee chat，手机通讯录比课程表还满 / 12 coffee chats a day, contacts > classes",
        points: { harvard: 3, columbia: 2, penn: 1 },
      },
      {
        id: "1b",
        label: "图书馆常驻嘉宾，老板问就是在“想大问题” / Library resident thinking big thoughts",
        points: { princeton: 3, yale: 2, cornell: 1 },
      },
      {
        id: "1c",
        label: "课表像自助餐，主打一个“我全都要试试” / Curriculum buffet, try everything once",
        points: { brown: 3, yale: 1, dartmouth: 1 },
      },
      {
        id: "1d",
        label: "校园里走十步就能碰到熟人，社交安全感拉满 / Everyone knows everyone, cozy social bubble",
        points: { dartmouth: 3, brown: 1, cornell: 1 },
      },
    ],
  },
  {
    id: 2,
    title: "你最想蹭到哪种“隐藏福利”？ / Which campus perk do you crave most?",
    options: [
      {
        id: "2a",
        label: "校友局：还没毕业就先拿到“神秘引荐” / Alumni magic unlocks before graduation",
        points: { harvard: 3, columbia: 2, penn: 1 },
      },
      {
        id: "2b",
        label: "课堂作业直接能写进创业 BP / Homework turns into startup pitch deck",
        points: { penn: 3, columbia: 2, cornell: 1 },
      },
      {
        id: "2c",
        label: "上课像圆桌辩论，发言比抢票还刺激 / Seminars feel like intellectual fight club",
        points: { yale: 3, brown: 2, dartmouth: 1 },
      },
      {
        id: "2d",
        label: "论文脚注比朋友圈还长，越硬核越兴奋 / Footnotes longer than social feeds",
        points: { princeton: 3, cornell: 2, harvard: 1 },
      },
    ],
  },
  {
    id: 3,
    title: "你的人生主线更像哪条“开挂路线”？ / Which main-character route is yours?",
    options: [
      {
        id: "3a",
        label: "西装一穿，PPT 一开，空气里都是 deal 味 / Suit up, slides up, deal energy everywhere",
        points: { penn: 3, harvard: 2, columbia: 2 },
      },
      {
        id: "3b",
        label: "白天写 policy memo，晚上讨论世界走向 / Policy memo by day, world affairs by night",
        points: { harvard: 3, yale: 2, princeton: 1 },
      },
      {
        id: "3c",
        label: "“再读几年”不是拖延，是学术信仰 / More years in school = a calling",
        points: { princeton: 3, cornell: 2, yale: 1 },
      },
      {
        id: "3d",
        label: "今天人文明天 CS，主打一个跨界蹦迪 / Humanities today, CS tomorrow, vibe-driven",
        points: { brown: 3, dartmouth: 2, columbia: 1 },
      },
    ],
  },
  {
    id: 4,
    title: "你理想中的校园地图是哪种版本？ / Pick your dream campus map",
    options: [
      {
        id: "4a",
        label: "楼下就是大城市副本，出门随机触发机会 / Big-city side quests outside your dorm",
        points: { columbia: 3, penn: 2, harvard: 1 },
      },
      {
        id: "4b",
        label: "白天学院风，晚上城市风，双模式切换 / Academia by day, city mode by night",
        points: { harvard: 3, yale: 2, princeton: 1 },
      },
      {
        id: "4c",
        label: "安静小镇慢慢卷，熟人局舒适又上头 / Quiet town, subtle grind, close circles",
        points: { dartmouth: 3, princeton: 2, brown: 1 },
      },
      {
        id: "4d",
        label: "地图超大内容超多，像开放世界 RPG / Massive map, endless quests, open-world style",
        points: { cornell: 3, penn: 1, columbia: 1 },
      },
    ],
  },
  {
    id: 5,
    title: "毕业后你想点亮哪种“成就徽章”？ / Which post-grad achievement badge do you want?",
    options: [
      {
        id: "5a",
        label: "名字出现在“30 under 30”那种榜单上 / Land on those flashy under-30 lists",
        points: { harvard: 3, princeton: 2, penn: 1 },
      },
      {
        id: "5b",
        label: "写作表达拉满，观点输出自带高赞 / Expressive thinker with high-impact narratives",
        points: { yale: 3, brown: 2, columbia: 1 },
      },
      {
        id: "5c",
        label: "产品、技术、商业三修，边做边起飞 / Build products and ship fast, founder mode",
        points: { penn: 3, cornell: 2, columbia: 1 },
      },
      {
        id: "5d",
        label: "不求最炸裂，求长期稳健且关系优质 / Sustainable growth with strong relationships",
        points: { dartmouth: 3, cornell: 1, yale: 1 },
      },
    ],
  },
  {
    id: 6,
    title: "理想课堂在你眼里应该怎么“上头”？ / What makes class actually exciting for you?",
    options: [
      {
        id: "6a",
        label: "案例讨论像真人秀，随时被 call out / Case classes feel like live reality TV",
        points: { penn: 3, columbia: 2, harvard: 1 },
      },
      {
        id: "6b",
        label: "一句话可以吵三十分钟，越辩越开心 / One sentence, 30 minutes of debate, perfect",
        points: { princeton: 3, yale: 2, harvard: 1 },
      },
      {
        id: "6c",
        label: "课表 DIY，像在配自己的技能树 / Build your own skill tree with course freedom",
        points: { brown: 3, cornell: 1, dartmouth: 1 },
      },
      {
        id: "6d",
        label: "老师记得你名字，交流像导师副本 / Professors know your name, mentor arc unlocked",
        points: { dartmouth: 3, yale: 1, brown: 1 },
      },
    ],
  },
  {
    id: 7,
    title: "DDL 压过来时，你是哪种战斗形态？ / What's your mode when deadlines attack?",
    options: [
      {
        id: "7a",
        label: "立刻拉群分工，五分钟开战术会 / Start a war-room in five minutes",
        points: { harvard: 3, penn: 2, columbia: 1 },
      },
      {
        id: "7b",
        label: "先建表格再开工，稳到像项目经理 / Spreadsheet first, panic never",
        points: { princeton: 3, cornell: 2, yale: 1 },
      },
      {
        id: "7c",
        label: "边做边改，遇坑就丝滑绕路 / Improvise, pivot, keep moving",
        points: { brown: 3, columbia: 1, penn: 1 },
      },
      {
        id: "7d",
        label: "先和队友抱团取暖，再慢慢推进 / Team huddle, then steady execution",
        points: { dartmouth: 3, yale: 1, cornell: 1 },
      },
    ],
  },
  {
    id: 8,
    title: "你最想混入哪种同学圈层？ / Which peer crowd do you want to join?",
    options: [
      {
        id: "8a",
        label: "人均野心家，聊天三句离不开 career / Everyone is absurdly ambitious",
        points: { harvard: 3, penn: 2, columbia: 1 },
      },
      {
        id: "8b",
        label: "饭桌就是 mini TED，观点输出不断电 / Dinner table turns into mini TED talk",
        points: { yale: 3, princeton: 2, brown: 1 },
      },
      {
        id: "8c",
        label: "奇人异士浓度高，主打“你这样也很酷” / Diverse weirdos, everyone is interesting",
        points: { brown: 3, cornell: 2, columbia: 1 },
      },
      {
        id: "8d",
        label: "小而熟的社群，出门像参加同学 reunion / Tight-knit crowd, daily reunion vibes",
        points: { dartmouth: 3, yale: 1, cornell: 1 },
      },
    ],
  },
  {
    id: 9,
    title: "社团季到了，你会先冲哪个摊位？ / Club fair starts, where do you run first?",
    options: [
      {
        id: "9a",
        label: "创业/投资/商业竞赛，主打“今天就融资” / Startup-investing booths, funding dreams",
        points: { penn: 3, harvard: 2, columbia: 1 },
      },
      {
        id: "9b",
        label: "辩论、写作、公共事务，嘴和脑都要快 / Debate-writing-public affairs combo",
        points: { yale: 3, harvard: 2, princeton: 1 },
      },
      {
        id: "9c",
        label: "实验室和学术队，论文进度条拉起来 / Lab life and research grind mode",
        points: { princeton: 3, cornell: 2, harvard: 1 },
      },
      {
        id: "9d",
        label: "户外+服务+兴趣社群，社交和意义都要 / Outdoors, service, and meaningful community",
        points: { dartmouth: 3, brown: 2, cornell: 1 },
      },
    ],
  },
  {
    id: 10,
    title: "四年后你最想带走哪样“终极战利品”？ / What's your ultimate four-year loot?",
    options: [
      {
        id: "10a",
        label: "一个能快速放大影响力的超级跳板 / A launchpad that scales your influence fast",
        points: { harvard: 3, columbia: 2, penn: 1 },
      },
      {
        id: "10b",
        label: "硬核学术内功，未来继续深造不慌 / Serious academic power for long-term depth",
        points: { princeton: 3, yale: 2, cornell: 1 },
      },
      {
        id: "10c",
        label: "找到“这就是我”的独特路线图 / A uniquely-you path and identity",
        points: { brown: 3, dartmouth: 1, yale: 1 },
      },
      {
        id: "10d",
        label: "一张长期靠谱的人脉与支持网络 / A reliable long-term network and support system",
        points: { dartmouth: 3, penn: 1, cornell: 1 },
      },
    ],
  },
];

export const questionSets: Record<QuizMode, Question[]> = {
  normal: normalQuestions,
  fun: funQuestions,
};

export function resolveQuizMode(input?: string): QuizMode {
  return input === "fun" ? "fun" : "normal";
}

export const mockQuestions: Question[] = questionSets.normal;
