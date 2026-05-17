/* ========== 首页统一时间线交互 ========== */
(function() {
    const img = document.getElementById('ut-image');
    if (!img) return; // 仅首页有此元素

    const utData = {
        '1933': { title: '1933年1月 — 纳粹上台', desc: '1933年1月30日，兴登堡任命希特勒为总理。国会纵火案后《授权法》通过，希特勒建立独裁统治，迅速重整军备突破凡尔赛条约限制，为日后的领土扩张奠定军事基础。', map: 'assets/images/1933.png', mapCaption: '1933年1月 — 希特勒出任总理', photo: 'assets/images/expansion-1933.jpg', photoCaption: '希特勒第一届内阁合影' },
        '1936': { title: '1936年3月 — 莱茵兰再军事化', desc: '希特勒违反《凡尔赛条约》，派兵进入莱茵兰非军事区。英法仅提出外交抗议，未采取军事行动，希特勒的冒险获得成功。', map: 'assets/images/1936.png', mapCaption: '1936年3月 — 莱茵兰再军事化', photo: 'assets/images/expansion-rhineland.jpg', photoCaption: '德军进驻莱茵兰' },
        '1938a': { title: '1938年3月 — 德奥合并', desc: '德军越过边境进入奥地利，受到许多奥地利人的欢迎。希特勒宣布德奥合并，奥地利成为"东区"，凡尔赛条约的枷锁被彻底打破。', map: 'assets/images/1938.3.png', mapCaption: '1938年3月 — 德奥合并', photo: 'assets/images/expansion-anschluss.jpg', photoCaption: '德军进驻萨尔茨堡' },
        '1938b': { title: '1938年9月 — 慕尼黑会议', desc: '英法意德签署《慕尼黑协定》，将苏台德地区割让给德国，绥靖政策达到顶峰。半年后德军吞并整个捷克斯洛伐克，不费一枪一弹获得完整工业区。', map: 'assets/images/1938.9.png', mapCaption: '1938年9月 — 慕尼黑协定', photo: 'assets/images/expansion-sudetenland.jpg', photoCaption: '希特勒进入埃格尔' },
        '1939': { title: '1939年9月 — 入侵波兰', desc: '1939年9月1日，德军以闪击战战术入侵波兰。苏联根据《苏德互不侵犯条约》秘密议定书从东面夹击，一个月内波兰被瓜分。英法对德宣战，第二次世界大战正式爆发。', map: 'assets/images/1939.png', mapCaption: '1939年9月 — 入侵波兰', photo: 'assets/images/expansion-poland.jpg', photoCaption: '德军装甲部队越过布拉河' },
        '1940': { title: '1940年6月 — 西欧征服', desc: '德军装甲部队穿越阿登山脉，六周内击溃法国。6月22日法国在贡比涅车厢签署停战协定——1918年德国在此投降，如今角色互换，希特勒亲赴现场留影，达到个人声誉巅峰。', map: 'assets/images/1940.png', mapCaption: '1940年6月 — 法国投降', photo: 'assets/images/expansion-france.jpg', photoCaption: '法德签署停战协定' },
        '1941': { title: '1941年6月 — 巴巴罗萨计划', desc: '1941年6月22日，德国以300万大军分三路入侵苏联——北方集团军群目标列宁格勒，中央集团军群直指莫斯科，南方集团军群挺进乌克兰。初期推进数百公里，占领大片苏联领土。', map: 'assets/images/1941.png', mapCaption: '1941年6月 — 入侵苏联', photo: 'assets/images/expansion-barbarossa.jpg', photoCaption: '德军装甲部队向苏联腹地推进' },
        '1945': { title: '1945年5月 — 帝国覆灭', desc: '1945年4月16日，苏军以250万兵力攻入柏林。希特勒在总理府地堡自杀，国防军最高统帅部于5月8日签署无条件投降书。第三帝国仅存在12年又4个月便彻底覆灭，欧洲终于迎来了和平。', map: 'assets/images/1945.png', mapCaption: '1945年5月 — 柏林被占与德国分裂', photo: 'assets/images/reichstag-flag.jpg', photoCaption: '苏联红军在柏林国会大厦升起红旗' }
    };

    const titleEl = document.getElementById('ut-title');
    const descEl = document.getElementById('ut-desc');
    const captionEl = document.getElementById('ut-caption');
    const descImg = document.getElementById('ut-desc-img');
    const descCaptionEl = document.getElementById('ut-desc-caption');

    function update(id) {
        const d = utData[id];
        if (!d) return;
        img.src = d.map;
        img.alt = d.title;
        titleEl.textContent = d.title;
        descEl.textContent = d.desc;
        if (captionEl) captionEl.textContent = d.mapCaption;
        if (descImg) descImg.src = d.photo;
        if (descCaptionEl) descCaptionEl.textContent = d.photoCaption;
    }

    update('1933');

    document.querySelectorAll('.ut-item').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.ut-item').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            update(this.dataset.id);
        });
    });
})();

/* ========== 人物页面数据 ========== */

const figuresData = [
    {
        category: "元首",
        standalone: true,
        figures: [
            {
                id: "hitler",
                name: "阿道夫·希特勒",
                germanName: "Adolf Hitler",
                dates: "1889年4月20日 - 1945年4月30日",
                title: "元首、帝国总理",
                image: "../assets/images/hitler.jpg",
                description: "纳粹党的领袖，第三帝国的缔造者。出身奥地利，凭借卓越的演讲才能和宣传手段在魏玛共和国的危机中崛起。建立极权统治后，发动第二次世界大战，系统性地推行种族灭绝政策，最终在柏林地堡中自杀身亡。",
                timeline: [
                    "纳粹党领袖（1921-1945）",
                    "德国总理（1933-1945）",
                    "德国元首（1934-1945）",
                    "发动第二次世界大战"
                ]
            }
        ]
    },
    {
        category: "帝国领导层",
        germanCategory: "Reichsführung",
        figures: [
            {
                id: "goebbels",
                name: "约瑟夫·戈培尔",
                germanName: "Joseph Goebbels",
                dates: "1897年10月29日 - 1945年5月1日",
                title: "宣传部长",
                image: "../assets/images/goebbels.jpg",
                description: "纳粹宣传机器的操控者。戈培尔精通媒体操控，通过报纸、广播、电影和大型集会全面控制民众思想。他在希特勒自杀后毒死自己的六个孩子，随后与妻子一同自杀。",
                timeline: [
                    "纳粹党柏林大区领袖",
                    "帝国宣传部长（1933-1945）",
                    "人民启蒙与宣传部部长",
                    "《人民观察家报》主编",
                    "组织纽伦堡党代会"
                ]
            },
            {
                id: "ribbentrop",
                name: "约阿希姆·冯·里宾特洛甫",
                germanName: "Joachim von Ribbentrop",
                dates: "1893年4月30日 - 1946年10月16日",
                title: "外交部长",
                image: "../assets/images/ribbentrop.jpg",
                description: "纳粹德国的外交政策制定者。里宾特洛甫曾担任驻英国大使，后出任外交部长，促成了《苏德互不侵犯条约》的签订。战后在纽伦堡审判中被判处绞刑。",
                timeline: [
                    "驻英国大使（1936-1938）",
                    "外交部长（1938-1945）",
                    "签订《慕尼黑协定》",
                    "签订《苏德互不侵犯条约》",
                    "纽伦堡审判中被处决"
                ]
            },
            {
                id: "speer",
                name: "阿尔贝特·施佩尔",
                germanName: "Albert Speer",
                dates: "1905年3月19日 - 1981年9月1日",
                title: "军备与战时生产部长",
                image: "../assets/images/speer.jpg",
                description: "希特勒的首席建筑师，后成为军备部长。施佩尔以其卓越的组织能力大幅提升了德国的军工产能。在纽伦堡审判中逃脱死刑，被判20年监禁。他的回忆录成为研究纳粹德国的重要史料。",
                timeline: [
                    "希特勒的首席建筑师（1934-1942）",
                    "军备部长（1942-1945）",
                    "战时生产总监",
                    "组织托特组织",
                    "纽伦堡审判中被判20年监禁"
                ]
            },
            {
                id: "bormann",
                name: "马丁·鲍曼",
                germanName: "Martin Bormann",
                dates: "1900年6月17日 - 1945年5月2日",
                title: "党务部长",
                image: "../assets/images/bormann.jpg",
                description: "纳粹党党务部长，希特勒的私人秘书。鲍曼通过控制希特勒的日常事务和文件往来攫取了巨大权力，成为纳粹党内最有权势的人物之一。战后试图逃脱时死亡，其日记成为研究纳粹德国的重要史料。",
                timeline: [
                    "纳粹党办公厅主任（1941-1945）",
                    "希特勒私人秘书",
                    "党务部长（1941-1945）",
                    "控制纳粹党机构",
                    "战后被宣布死亡"
                ]
            },
            {
                id: "keitel",
                name: "威廉·凯特尔",
                germanName: "Wilhelm Keitel",
                dates: "1882年9月22日 - 1946年10月16日",
                title: "陆军元帅、国防军最高统帅部长官",
                image: "../assets/images/keitel.jpg",
                description: "希特勒最忠实的军事助手，担任国防军最高统帅部（OKW）参谋长。凯特尔参与了二战期间所有重大军事决策，以对希特勒绝对服从著称，被盟军称为\"唯命是从的走狗\"。战后在纽伦堡审判中被判处绞刑。",
                timeline: [
                    "国防军部长办公厅主任（1935-1938）",
                    "国防军最高统帅部长官（1938-1945）",
                    "陆军元帅（1940年）",
                    "签署德国无条件投降书（1945年5月）",
                    "纽伦堡审判中被处决"
                ]
            },
            {
                id: "jodl",
                name: "阿尔弗雷德·约德尔",
                germanName: "Alfred Jodl",
                dates: "1890年5月10日 - 1946年10月16日",
                title: "国防军最高统帅部作战局局长、陆军大将",
                image: "../assets/images/jodl.jpg",
                description: "希特勒的主要军事顾问和作战策划者。约德尔作为OKW作战局局长，参与策划了德国大部分军事行动，从入侵挪威到巴巴罗萨计划。1945年5月代表德军在兰斯签署投降书。战后在纽伦堡审判中被判处绞刑。",
                timeline: [
                    "国防军最高统帅部作战局局长（1939-1945）",
                    "策划入侵挪威、苏联等重大战役",
                    "陆军大将（1944年）",
                    "代表德军签署兰斯投降书（1945年5月）",
                    "纽伦堡审判中被处决"
                ]
            }
        ]
    },
    {
        category: "党卫军",
        germanCategory: "Schutzstaffel (SS)",
        figures: [
            {
                id: "himmler",
                name: "海因里希·希姆莱",
                germanName: "Heinrich Himmler",
                dates: "1900年10月7日 - 1945年5月23日",
                title: "党卫队全国领袖",
                image: "../assets/images/himmler.jpg",
                description: "党卫队（SS）的最高领袖，大屠杀的主要组织者和执行者。希姆莱掌控着纳粹德国的警察系统、集中营和种族灭绝机器。战争末期试图与盟军单独媾和，事败后服毒自杀。",
                timeline: [
                    "党卫队全国领袖（1929-1945）",
                    "盖世太保总监",
                    "德占区警察系统总负责人",
                    "集中营体系的建立者",
                    "大屠杀的主要组织者"
                ]
            },
            {
                id: "heydrich",
                name: "莱因哈德·海德里希",
                germanName: "Reinhard Heydrich",
                dates: "1904年3月7日 - 1942年6月4日",
                title: "党卫队保安处处长",
                image: "../assets/images/heydrich.jpg",
                description: "盖世太保首脑，大屠杀的主要执行者。海德里希是纳粹极权统治的核心人物，主持了决定犹太人命运的万湖会议。1942年在布拉格被捷克伞兵刺杀，希特勒为其举行了隆重的国葬。",
                timeline: [
                    "党卫队保安处处长（1931-1942）",
                    "盖世太保首脑（1934-1942）",
                    "帝国保安总局局长",
                    "波西米亚和摩拉维亚保护长官",
                    "万湖会议组织者"
                ]
            },
            {
                id: "eichmann",
                name: "阿道夫·艾希曼",
                germanName: "Adolf Eichmann",
                dates: "1906年3月19日 - 1962年6月1日",
                title: "党卫队一级突击队大队长",
                image: "../assets/images/eichmann.jpg",
                description: "\"最终解决方案\"的主要组织者，负责协调对犹太人的大规模驱逐和屠杀。艾希曼在战后逃往阿根廷，1960年被以色列摩萨德绑架，在耶路撒冷受审。审判全球直播，最终被判处死刑，是唯一被以色列处决的纳粹战犯。",
                timeline: [
                    "犹太事务办公室主任（1941-1945）",
                    "万湖会议执行者",
                    "\"最终解决方案\"主要组织者",
                    "战后潜逃阿根廷",
                    "在以色列受审并被处决（1962年）"
                ]
            }
        ]
    },
    {
        category: "陆军元帅与将领",
        germanCategory: "Generalfeldmarschall und Offiziere",
        figures: [
            {
                id: "rommel",
                name: "埃尔温·隆美尔",
                germanName: "Erwin Rommel",
                dates: "1891年11月15日 - 1944年10月14日",
                title: "非洲军团司令、陆军元帅",
                image: "../assets/images/rommel.jpg",
                description: "绰号\"沙漠之狐\"，二战中最著名的德军指挥官之一。隆美尔在北非战场以灵活的机动战术闻名。后因涉嫌参与刺杀希特勒的密谋，被迫服毒自尽。",
                timeline: [
                    "第七装甲师师长（1940）",
                    "非洲军团司令（1941-1943）",
                    "B集团军群司令（1944）",
                    "帝国元帅（1942年）",
                    "北意大利集团军群司令"
                ]
            },
            {
                id: "paulus",
                name: "弗里德里希·保卢斯",
                germanName: "Friedrich Paulus",
                dates: "1890年9月23日 - 1957年2月1日",
                title: "第六集团军司令、陆军元帅",
                image: "../assets/images/paulus.jpg",
                description: "第六集团军司令，斯大林格勒战役的指挥官。保卢斯在斯大林格勒被苏军包围后拒绝投降，最终在希特勒晋升他为元帅（暗示自杀）后反而向苏军投降，成为德国第一位投降的元帅。",
                timeline: [
                    "第六集团军参谋长（1940-1942）",
                    "第六集团军司令（1942-1943）",
                    "斯大林格勒战役指挥官",
                    "帝国元帅（1943年）",
                    "战后成为苏联战俘"
                ]
            },
            {
                id: "manstein",
                name: "埃里希·冯·曼施坦因",
                germanName: "Erich von Manstein",
                dates: "1887年11月24日 - 1973年6月10日",
                title: "南方集团军群司令、陆军元帅",
                image: "../assets/images/manstein.jpg",
                description: "战术大师，被公认为二战中最杰出的德军将领之一。曼施坦因策划了入侵法国的\"曼施坦因计划\"，在东线多次挽救危局。战后被判18年监禁，仅服刑4年获释。",
                timeline: [
                    "第56装甲军军长（1941-1942）",
                    "第11集团军司令（1942）",
                    "顿河集团军群司令（1942-1943）",
                    "南方集团军群司令（1943-1944）",
                    "帝国元帅（1942年）"
                ]
            },
            {
                id: "guderian",
                name: "海因茨·古德里安",
                germanName: "Heinz Guderian",
                dates: "1888年6月17日 - 1954年5月14日",
                title: "装甲兵总监、陆军大将",
                image: "../assets/images/guderian.jpg",
                description: "\"闪击战\"理论的先驱和实践者，德国装甲兵的缔造者。古德里安在波兰、法国和苏联战役中指挥装甲部队取得惊人战果，其军事思想深刻影响了现代战争。战后被俘获释，后担任西德国防军顾问。",
                timeline: [
                    "第19装甲军军长（1939-1940）",
                    "第2装甲集团军司令（1940-1941）",
                    "装甲兵总监（1943-1945）",
                    "陆军代理总参谋长（1945）",
                    "\"闪击战\"理论创始人"
                ]
            },
            {
                id: "rundstedt",
                name: "格尔德·冯·伦德施泰特",
                germanName: "Gerd von Rundstedt",
                dates: "1875年12月12日 - 1953年2月24日",
                title: "陆军元帅、西线总司令",
                image: "../assets/images/rundstedt.jpg",
                description: "德国最资深的陆军元帅之一，被视为国防军的精神领袖。伦德施泰特指挥了入侵波兰、法国和苏联的大型集团军群。后期担任西线总司令，在阿登反击战中指挥德军。因对希特勒的战略分歧多次被解职又复出。",
                timeline: [
                    "南方集团军群司令（1939）",
                    "A集团军群司令（1940-1941）",
                    "南方集团军群司令（1941-1942）",
                    "西线总司令（1942-1945）",
                    "帝国元帅（1940年）"
                ]
            },
            {
                id: "model",
                name: "瓦尔特·莫德尔",
                germanName: "Walter Model",
                dates: "1891年1月24日 - 1945年4月21日",
                title: "陆军元帅、B集团军群司令",
                image: "../assets/images/model.jpg",
                description: "希特勒的\"救火队员\"，防御战大师。莫德尔在东线多次挽救濒临崩溃的战线，以铁腕指挥著称。战争末期在西线指挥B集团军群，在鲁尔包围圈中被盟军围困后自杀身亡，成为唯一在德国本土自杀的陆军元帅。",
                timeline: [
                    "第41装甲军军长（1941-1942）",
                    "第9集团军司令（1942-1944）",
                    "北方集团军群司令（1944）",
                    "B集团军群司令（1944-1945）",
                    "帝国元帅（1944年）"
                ]
            }
        ]
    },
    {
        category: "空军",
        germanCategory: "Luftwaffe",
        figures: [
            {
                id: "goring",
                name: "赫尔曼·戈林",
                germanName: "Hermann Göring",
                dates: "1893年1月12日 - 1946年10月15日",
                title: "空军总司令、帝国元帅",
                image: "../assets/images/goring.jpg",
                description: "纳粹德国空军创始人，一战王牌飞行员。戈林在二战初期战功显赫，创建了德国空军并主导四年计划。但后期因腐败和指挥失误失宠于希特勒，其领导的空军也逐渐丧失制空权。在纽伦堡审判中被判死刑，行刑前夜服毒自杀。",
                timeline: [
                    "冲锋队总指挥（1923-1934）",
                    "德国空军总司令（1935-1945）",
                    "四年计划全权代表（1936-1945）",
                    "帝国元帅（1940年）",
                    "帝国继承人（1939-1945）"
                ]
            },
            {
                id: "kesselring",
                name: "阿尔贝特·凯塞林",
                germanName: "Albert Kesselring",
                dates: "1885年11月30日 - 1960年7月16日",
                title: "西线空军总司令、空军元帅",
                image: "../assets/images/kesselring.jpg",
                description: "意大利战场的指挥官，擅长防御作战。凯塞林在意大利成功组织了长时间的防御战，被盟军称为\"防守大师\"。战后因战争罪被判处死刑，后减刑释放。",
                timeline: [
                    "第二航空队司令（1939-1943）",
                    "南线总司令（1941-1945）",
                    "C集团军群司令（1944-1945）",
                    "帝国元帅（1940年）",
                    "西线空军总司令（1945）"
                ]
            }
        ]
    },
    {
        category: "海军元帅",
        germanCategory: "Großadmiral",
        figures: [
            {
                id: "donitz",
                name: "卡尔·邓尼茨",
                germanName: "Karl Dönitz",
                dates: "1891年9月16日 - 1980年12月24日",
                title: "海军总司令、海军元帅",
                image: "../assets/images/donitz.jpg",
                description: "U艇战专家，狼群战术的创造者。邓尼茨在希特勒自杀后短暂担任德国总统，试图与盟军谈判投降。战后被判10年监禁，是最后一位离世的纳粹元帅。",
                timeline: [
                    "潜艇部队司令（1939-1943）",
                    "海军总司令（1943-1945）",
                    "帝国元帅（1943年）",
                    "德国总统（1945年5月）",
                    "U艇战战术创新者"
                ]
            }
        ]
    }
];

/* ========== 人物页面渲染 ========== */

const FALLBACK_IMG = "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22260%22%3E%3Crect fill=%22%23333%22 width=%22200%22 height=%22260%22/%3E%3Ctext fill=%22%23999%22 font-size=%2216%22 x=%2260%22 y=%22130%22%3E暂无画像%3C/text%3E%3C/svg%3E";
const FALLBACK_AVATAR = "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%23333%22 width=%22100%22 height=%22100%22/%3E%3Ctext fill=%22%23fff%22 font-size=%2212%22 x=%2210%22 y=%2255%22%3E暂无图片%3C/text%3E%3C/svg%3E";
const FALLBACK_LEADER = "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22280%22 height=%22380%22%3E%3Crect fill=%22%23333%22 width=%22280%22 height=%22380%22/%3E%3Ctext fill=%22%23999%22 font-size=%2220%22 x=%2280%22 y=%22190%22%3E暂无画像%3C/text%3E%3C/svg%3E";

function detailInfoHTML(fig) {
    return `
        <h3>${fig.name}</h3>
        <p class="german-name">${fig.germanName}</p>
        <p class="detail-dates">${fig.dates}</p>
        <p class="detail-title">${fig.title}</p>
        <p class="detail-desc">${fig.description}</p>
        ${fig.timeline ? `
        <div class="detail-timeline">
            <h4>重要经历与要职</h4>
            <ul>${fig.timeline.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>` : ''}
    `;
}

function renderFigures() {
    const container = document.getElementById('figures-app');
    if (!container) return;

    let html = '';

    figuresData.forEach(category => {
        if (category.standalone) {
            const fig = category.figures[0];
            html += `
            <section class="figures-section figures-section-leader">
                <div class="leader-container">
                    <div class="leader-portrait">
                        <img src="${fig.image}" alt="${fig.name}" onerror="this.src='${FALLBACK_LEADER}'">
                    </div>
                    <div class="leader-info">
                        <div class="leader-badge">${category.category}</div>
                        ${detailInfoHTML(fig)}
                    </div>
                </div>
            </section>`;
        } else {
            html += `
            <section class="figures-section">
                <h2>${category.category}</h2>
                ${category.germanCategory ? `<p class="german-category">${category.germanCategory}</p>` : ''}
                <div class="figures-container">
                    <div class="figures-avatars">
                        ${category.figures.map((fig, i) => `
                        <div class="figure-avatar ${i === 0 ? 'active' : ''}" data-figure="${fig.id}">
                            <img src="${fig.image}" alt="${fig.name}" onerror="this.src='${FALLBACK_AVATAR}'">
                            <div class="avatar-text">
                                <span>${fig.name}</span>
                                <span class="german-sub">${fig.germanName}</span>
                            </div>
                        </div>`).join('')}
                    </div>
                    <div class="figure-detail">
                        ${category.figures.map((fig, i) => `
                        <div class="figure-detail-content ${i === 0 ? 'active' : ''}" data-figure="${fig.id}">
                            <div class="detail-portrait">
                                <img src="${fig.image}" alt="${fig.name}" onerror="this.src='${FALLBACK_IMG}'">
                            </div>
                            <div class="detail-info">${detailInfoHTML(fig)}</div>
                        </div>`).join('')}
                    </div>
                </div>
            </section>`;
        }
    });

    container.innerHTML = html;

    document.querySelectorAll('.figure-avatar').forEach(avatar => {
        avatar.addEventListener('click', function() {
            const wrap = this.closest('.figures-container');
            wrap.querySelectorAll('.figure-avatar').forEach(a => a.classList.remove('active'));
            wrap.querySelectorAll('.figure-detail-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const target = wrap.querySelector(`.figure-detail-content[data-figure="${this.dataset.figure}"]`);
            if (target) target.classList.add('active');
        });
    });
}

/* ========== 导航高亮 + 回到顶部（全站共用） ========== */

document.addEventListener('DOMContentLoaded', function() {
    // 导航高亮
    const currentPage = location.pathname.split('/').pop();
    const navLink = document.querySelector(`.nav-links a[href$="${currentPage}"]`);
    if (navLink) navLink.classList.add('active');

    // 回到顶部
    const btn = document.getElementById('back-to-top');
    if (btn) {
        window.addEventListener('scroll', function() {
            btn.classList.toggle('visible', window.scrollY > 500);
        });
        btn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

document.addEventListener('DOMContentLoaded', renderFigures);

/* ========== 背景音乐播放器 ========== */
(function() {
    const musicBtn = document.getElementById('music-toggle');
    if (!musicBtn) return;

    const audio = document.getElementById('bg-music');
    if (!audio) return;

    musicBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().then(() => {
                musicBtn.classList.add('playing');
            }).catch(() => {});
        } else {
            audio.pause();
            musicBtn.classList.remove('playing');
        }
    });
})();
