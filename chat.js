// AI助手的知识库
const foodKnowledge = {
    cooking: {
        methods: ['煎', '炒', '烹', '炸', '炖', '焖', '蒸', '烤'],
        tips: {
            '炒菜': '要注意火候控制，大火快炒保持食材的鲜嫩',
            '煎肉': '煎牛排时要让肉回温，这样更容易掌握火候',
            '炖汤': '炖汤时先用大火煮沸，再转小火慢炖，这样汤更鲜美',
            '蒸鱼': '蒸鱼时间不要太长，以免破坏鱼肉的口感',
            '烤肉': '烤肉前要充分腌制，这样更入味'
        }
    },
    ingredients: {
        vegetables: ['白菜', '青菜', '菠菜', '芹菜', '胡萝卜', '土豆', '茄子', '青椒'],
        meat: ['猪肉', '牛肉', '鸡肉', '羊肉', '鱼', '虾'],
        seasoning: ['盐', '糖', '酱油', '醋', '料酒', '蒜', '姜', '葱']
    },
    cuisines: {
        '川菜': '特点是麻辣鲜香，著名菜品有宫保鸡丁、麻婆豆腐、水煮鱼',
        '粤菜': '特点是清淡鲜美，著名菜品有白切鸡、清蒸鱼、叉烧肉',
        '苏菜': '特点是清鲜淡雅，著名菜品有松鼠桂鱼、叫花鸡、扬州炒饭',
        '鲁菜': '特点是咸鲜为主，著名菜品有葱烧海参、糖醋鲤鱼'
    },
    nutrition: {
        '蛋白质': ['瘦肉', '鱼', '虾', '鸡蛋', '豆制品'],
        '维生素': ['绿叶菜', '胡萝卜', '水果', '菌菇'],
        '碳水化合物': ['米饭', '面食', '土豆', '红薯'],
        '膳食纤维': ['蔬菜', '全谷物', '豆类']
    },
    healthyDiet: {
        '减肥': ['多吃蔬菜水果', '选择蒸煮烤', '控制油盐摄入', '少吃精制碳水'],
        '增肌': ['适量优质蛋白', '全谷物主食', '补充维生素矿物质'],
        '养胃': ['少食多餐', '不要太冷太热', '避免刺激性食物'],
        '补铁': ['动物肝脏', '瘦红肉', '深绿色蔬菜']
    },
    dishes: {
        '白切鸡': {
            description: '粤式经典名菜，以其鲜嫩多汁的特点著称',
            ingredients: {
                main: ['整鸡 1只', '葱 2根', '姜 3片'],
                sauce: ['蒜蓉', '姜葱油', '生抽', '盐']
            },
            steps: [
                '鸡洗净，腹腔放入葱姜',
                '锅中加水，加入适量盐，放入整鸡',
                '大火煮沸后转小火煮15分钟',
                '关火后浸泡15分钟',
                '取出晾凉后切块',
                '准备蘸料：姜葱油、蒜蓉等'
            ],
            tips: [
                '选用三黄鸡最佳',
                '煮鸡时水要没过鸡身',
                '浸泡时间要足够，这样鸡肉更嫩滑',
                '切鸡时要顺着纹理切'
            ]
        },
        '宫保鸡丁': {
            description: '川菜名品，口感麻辣鲜香，搭配花生的香脆',
            ingredients: {
                main: ['鸡胸肉 300g', '花生米 50g', '青椒 2个', '干红辣椒 8-10个'],
                sauce: ['葱花', '姜末', '蒜末', '生抽', '料酒', '盐', '糖']
            },
            steps: [
                '鸡胸肉切丁，加入生抽、料酒腌制15分钟',
                '花生米炒熟备用，青椒切丁，干辣椒切段',
                '锅中放油，爆香葱姜蒜和干辣椒',
                '加入鸡丁快速翻炒至变色',
                '加入青椒和花生米翻炒',
                '加入调味料，大火翻炒均匀即可'
            ],
            tips: [
                '鸡肉不要切太大，要均匀',
                '花生米要提前炒香',
                '最后大火翻炒收汁，保持菜品的口感'
            ]
        },
        '麻婆豆腐': {
            description: '四川传统名菜，麻辣鲜香，豆腐嫩滑',
            ingredients: {
                main: ['豆腐 400g', '猪肉末 200g', '豆瓣酱', '花椒'],
                sauce: ['葱花', '蒜末', '生抽', '盐', '淀粉']
            },
            steps: [
                '豆腐切块，用温水浸泡',
                '锅中放油，爆香花椒',
                '加入肉末翻炒至变色',
                '加入豆瓣酱炒出香味',
                '加入豆腐块，小心翻炒',
                '最后勾芡，撒上葱花'
            ],
            tips: [
                '选用嫩豆腐口感更好',
                '翻炒时动作要轻，避免豆腐碎',
                '可以根据个人口味调整辣度'
            ]
        },
        '红烧肉': {
            description: '传统名菜，肥而不腻，入口即化',
            ingredients: {
                main: ['五花肉 500g', '葱段', '姜片', '冰糖'],
                sauce: ['生抽', '老抽', '料酒', '八角', '桂皮']
            },
            steps: [
                '五花肉切大块，冷水下锅焯水',
                '锅中放油，加入冰糖炒至焦糖色',
                '放入肉块翻炒上色',
                '加入调料和适量水',
                '大火烧开后转小火慢炖',
                '收汁时大火收至浓稠'
            ],
            tips: [
                '选用三层肉最佳',
                '炖煮时间要足够长，约1小时',
                '最后收汁要耐心，汤汁收至粘稠'
            ]
        },
        '清炒小白菜': {
            description: '家常快炒菜，清淡爽口，营养健康',
            ingredients: {
                main: ['小白菜 300g', '蒜末'],
                sauce: ['盐', '生抽', '料酒']
            },
            steps: [
                '小白菜洗净切段',
                '锅中放油烧热',
                '爆香蒜末',
                '加入小白菜快速翻炒',
                '加入调味料翻炒均匀'
            ],
            tips: [
                '火候要大，保持菜品脆嫩',
                '炒制时间不要太长',
                '最后加盐调味即可'
            ]
        },
        '水煮鱼': {
            description: '川菜代表，麻辣鲜香，鱼肉嫩滑',
            ingredients: {
                main: ['草鱼片 500g', '豆芽 200g', '生菜 200g', '干辣椒'],
                sauce: ['花椒', '蒜末', '姜片', '豆瓣酱', '盐']
            },
            steps: [
                '鱼片加料酒腌制15分钟',
                '豆芽和生菜焯水',
                '锅中爆香花椒和干辣椒',
                '加入豆瓣酱炒香',
                '加入鱼片，淋上热油',
                '最后撒上香菜即可'
            ],
            tips: [
                '鱼片要新鲜，切片要均匀',
                '最后浇油要小心，油温要够热',
                '可以根据个人口味调整辣度'
            ]
        },
        '糖醋排骨': {
            description: '经典名菜，酸甜可口，色泽诱人',
            ingredients: {
                main: ['排骨 500g', '青红椒', '葱段'],
                sauce: ['醋', '白糖', '生抽', '料酒', '盐']
            },
            steps: [
                '排骨切段，冷水下锅焯水',
                '调制糖醋汁',
                '锅中放油，将排骨炸至金黄',
                '倒出多余的油',
                '加入糖醋汁大火收汁',
                '最后撒上葱花'
            ],
            tips: [
                '排骨最好选用肋排',
                '炸制时油温要适中',
                '收汁时要注意火候，使排骨色泽红亮'
            ]
        }
    },
    cuisineTypes: {
        '中餐': {
            description: '中国传统美食，以其烹饪技法多样、口味丰富著称',
            categories: {
                '川菜': ['麻婆豆腐', '宫保鸡丁', '水煮鱼', '回锅肉'],
                '粤菜': ['白切鸡', '清蒸鱼', '叉烧肉', '虾饺'],
                '苏菜': ['松鼠桂鱼', '扬州炒饭', '狮子头', '盐水鸭'],
                '鲁菜': ['糖醋鲤鱼', '葱爆羊肉', '德州扒鸡', '九转大肠']
            },
            features: [
                '注重火候的掌控',
                '讲究色香味俱全',
                '强调食材的新鲜',
                '烹饪方法多样'
            ]
        },
        '西餐': {
            description: '以欧美料理为主，强调原汁原味和精确的烹饪方法',
            categories: {
                '意大利菜': ['披萨', '意大利面', '千层面', '提拉米苏'],
                '法国菜': ['法式蜗牛', '鹅肝酱', '牛排', '法棍面包'],
                '美式料理': ['汉堡', '牛排', '炸鸡', '薯条'],
                '地中海料理': ['希腊沙拉', '海鲜饭', '橄榄油面包']
            },
            features: [
                '强调食材本味',
                '精确的火候控制',
                '注重摆盘艺术',
                '配料相对简单'
            ]
        }
    },
    // 添加食材百科
    ingredients_wiki: {
        '蔬菜类': {
            '白菜': {
                nutrition: '富含维生素C、膳食纤维',
                selection: '选择叶片新鲜、结球紧实的',
                storage: '可放冰箱保存，但不要超过一周',
                cooking_tips: '适合炒、煮、炖，不宜久煮'
            },
            '菠菜': {
                nutrition: '富含铁质、叶酸',
                selection: '选择叶片翠绿、茎细嫩的',
                storage: '清洗后沥干，用保鲜袋存放',
                cooking_tips: '焯水时间不要太长，保持营养'
            }
            // 可以继续添加更多蔬菜
        },
        '肉类': {
            '猪肉': {
                nutrition: '富含蛋白质、维生素B1',
                selection: '肉质有弹性、颜色均匀',
                storage: '冷藏3天内食用，冷冻可存1个月',
                cooking_tips: '不同部位适合不同烹饪方法'
            },
            '牛肉': {
                nutrition: '富含铁质、优质蛋白',
                selection: '选择肉质鲜红、纹理清晰的',
                storage: '冷藏5天内食用，冷冻可存3个月',
                cooking_tips: '最好煎至七分熟，保持嫩度'
            }
        }
    },
    // 添加烹饪技巧百科
    cooking_techniques: {
        '基础技巧': {
            '炒': {
                description: '用少量油快速烹饪食材',
                key_points: [
                    '锅要够热',
                    '食材要大小均匀',
                    '注意翻炒频率'
                ],
                common_mistakes: [
                    '锅不够热',
                    '食材太多导致粘锅',
                    '翻炒不及时'
                ]
            },
            '煎': {
                description: '用适量油将食材煎至表面金黄',
                key_points: [
                    '控制油温',
                    '注意火候',
                    '把握翻面时机'
                ],
                common_mistakes: [
                    '油温太高导致糊',
                    '频繁翻动影响口感',
                    '未预热导致粘锅'
                ]
            }
        }
    },
    // 添加饮食健康知识
    health_knowledge: {
        '饮食禁忌': {
            '海鲜': '不宜与维生素C同食',
            '菠菜': '不宜与含钙食物同食',
            '酒': '不宜与含糖饮料混合'
        },
        '食材搭配': {
            '营养搭配': {
                '铁质吸收': '维生素C可促进铁质吸收',
                '蛋白质互补': '谷物配豆类可提高蛋白质价值',
                '脂溶性维生素': '需要油脂帮助吸收'
            }
        },
        '特殊人群饮食': {
            '孕妇': [
                '多吃富含叶酸的绿叶菜',
                '适量补充优质蛋白',
                '避免生冷食物'
            ],
            '老年人': [
                '食物要易消化',
                '补充钙质',
                '控制盐分摄入'
            ],
            '儿童': [
                '均衡营养',
                '适量补充钙铁',
                '少吃零食和甜食'
            ]
        }
    },
    // 添加餐饮文化知识
    food_culture: {
        '中国传统': {
            '节日美食': {
                '春节': ['饺子', '年糕', '鱼'],
                '端午': ['粽子', '咸鸭蛋'],
                '中秋': ['月饼', '柚子']
            },
            '饮食礼仪': [
                '公筷公勺',
                '不挑食',
                '不浪费'
            ]
        },
        '地方特色': {
            '北方': '以面食为主',
            '南方': '以米饭为主',
            '沿海': '海鲜为特色',
            '内陆': '肉食为主'
        }
    },
    easy_dishes: {
        '家常快炒': [
            {
                name: '青椒炒蛋',
                time: '10分钟',
                difficulty: '非常简单',
                description: '营养美味，适合新手'
            },
            {
                name: '炒青菜',
                time: '5分钟',
                difficulty: '非常简单',
                description: '清淡爽口，快速上手'
            },
            {
                name: '番茄炒蛋',
                time: '10分钟',
                difficulty: '非常简单',
                description: '经典家常菜'
            }
        ],
        '简单凉菜': [
            {
                name: '凉拌黄瓜',
                time: '5分钟',
                difficulty: '非常简单',
                description: '开胃爽口'
            },
            {
                name: '凉拌豆芽',
                time: '8分钟',
                difficulty: '非常简单',
                description: '清脆可口'
            }
        ],
        '快手主食': [
            {
                name: '蛋炒饭',
                time: '15分钟',
                difficulty: '简单',
                description: '方便快捷的主食'
            },
            {
                name: '阳春面',
                time: '10分钟',
                difficulty: '简单',
                description: '简单美味的面食'
            }
        ]
    },
    dish_introductions: {
        '宫保鸡丁': {
            origin: '四川传统名菜，相传是清朝四川总督丁宝桢的创制',
            characteristics: '口感麻辣鲜香，鸡肉鲜嫩，花生酥脆',
            taste: '麻辣适中，咸鲜为主',
            nutrition: '富含蛋白质，适量碳水化合物',
            occasions: '家常菜、宴客菜皆可',
            popularity: '深受欢迎的川菜代表作之一'
        },
        '麻婆豆腐': {
            origin: '四川成都名菜，源于清代陈麻婆豆腐店',
            characteristics: '豆腐嫩滑，肉末入味，麻辣鲜香',
            taste: '麻辣突出，口感丰富',
            nutrition: '豆腐富含植物蛋白，易消化',
            occasions: '日常餐桌必备菜品',
            popularity: '是最受欢迎的川菜之一'
        },
        '东坡肉': {
            origin: '源于北宋文豪苏东坡，始于杭州',
            characteristics: '肥而不腻，入口即化',
            taste: '咸甜适中，肉质软烂',
            nutrition: '富含蛋白质和适量脂肪',
            occasions: '年节待客佳品',
            popularity: '江浙名菜，享誉中外'
        },
        '水煮鱼': {
            origin: '四川传统名菜，起源于重庆渝北地区',
            characteristics: '鱼片嫩滑，汤汁麻辣鲜香',
            taste: '麻辣鲜香，层次丰富',
            nutrition: '富含优质蛋白，维生素D',
            occasions: '家庭聚餐、朋友聚会',
            popularity: '四川名菜，风靡全国'
        },
        '糖醋排骨': {
            origin: '江苏苏州名菜，历史悠久',
            characteristics: '外酥里嫩，酸甜适中',
            taste: '酸甜口味，肉质鲜嫩',
            nutrition: '富含蛋白质和钙质',
            occasions: '家常菜、宴客菜皆宜',
            popularity: '深受老少欢迎的传统名菜'
        },
        '红烧狮子头': {
            origin: '淮扬菜系代表作，因形似狮子头而得名',
            characteristics: '大块鲜嫩，汤汁浓郁',
            taste: '咸鲜为主，肉质松软',
            nutrition: '富含优质蛋白和多种维生素',
            occasions: '年节庆典、宴请亲朋',
            popularity: '江浙一带著名传统名菜'
        },
        '清蒸鲈鱼': {
            origin: '粤式经典菜品，突出食材本味',
            characteristics: '鱼肉鲜嫩，清淡爽口',
            taste: '鲜美清淡，保持原味',
            nutrition: '富含蛋白质和DHA',
            occasions: '日常餐桌、养生佳品',
            popularity: '广东家常名菜之一'
        },
        '回锅肉': {
            origin: '四川传统名菜，民间流传已久',
            characteristics: '肥瘦相间，香辣可口',
            taste: '麻辣鲜香，口感独特',
            nutrition: '热量较高，富含蛋白质',
            occasions: '家常菜、下酒菜',
            popularity: '四川最受欢迎的传统名菜之一'
        },
        '扬州炒饭': {
            origin: '扬州传统名点，历史悠久',
            characteristics: '料足味美，色彩缤纷',
            taste: '咸鲜适中，口感丰富',
            nutrition: '营养均衡，搭配合理',
            occasions: '日常主食、便当首选',
            popularity: '中国最著名的炒饭之一'
        },
        '红烧肉': {
            origin: '源于江浙地区的传统名菜，历史悠久',
            characteristics: '色泽红亮，肥而不腻，入口即化',
            taste: '咸鲜适中，带有焦糖香气',
            nutrition: '富含优质蛋白质和适量脂肪，热量较高',
            occasions: '家常菜、宴客菜、年节菜品',
            popularity: '中国最受欢迎的传统名菜之一'
        },
        '番茄炒蛋': {
            origin: '源于民间的经典家常菜',
            characteristics: '色彩鲜艳，酸甜可口',
            taste: '酸甜适中，口感滑嫩',
            nutrition: '富含蛋白质、维生素C和番茄红素',
            occasions: '日常餐桌、快手菜',
            popularity: '最受欢迎的家常菜之一'
        },
        '鱼香肉丝': {
            origin: '四川传统名菜，因其调味类似烹制鱼的味道而得名',
            characteristics: '咸甜酸辣俱全，肉丝嫩滑',
            taste: '味道浓郁，层次丰富',
            nutrition: '含有优质蛋白质，维生素丰富',
            occasions: '家常菜、下饭菜',
            popularity: '四川名菜，广受欢迎'
        },
        '青椒炒肉': {
            origin: '湘菜代表菜品之一',
            characteristics: '青椒清香，肉片鲜嫩',
            taste: '咸鲜为主，带有青椒特有的香气',
            nutrition: '维生素C含量丰富，蛋白质适中',
            occasions: '日常餐桌、快手菜',
            popularity: '深受大众喜爱的家常菜'
        },
        '蒜蓉炒菜心': {
            origin: '粤式经典小炒',
            characteristics: '清淡爽口，蒜香浓郁',
            taste: '清鲜可口，保持蔬菜本味',
            nutrition: '富含膳食纤维和维生素',
            occasions: '日常餐桌、养生菜品',
            popularity: '广东最常见的家常菜之一'
        },
        '鱼香肉丝': {
            origin: '四川传统名菜，因其调味类似烹制鱼的味道而得名',
            characteristics: '咸甜酸辣俱全，肉丝嫩滑',
            taste: '味道浓郁，层次丰富',
            nutrition: '含有优质蛋白质，维生素丰富',
            occasions: '家常菜、下饭菜',
            popularity: '四川名菜，广受欢迎'
        },
        '糖醋里脊': {
            origin: '苏菜代表菜品，历史悠久',
            characteristics: '外酥内嫩，酸甜可口',
            taste: '酸甜平衡，口感酥脆',
            nutrition: '富含优质蛋白质，适量碳水',
            occasions: '宴客菜、家常菜',
            popularity: '深受大众喜爱的传统名菜'
        },
        '葱爆羊肉': {
            origin: '北方传统名菜，尤以山东最为出名',
            characteristics: '羊肉鲜嫩，葱香浓郁',
            taste: '咸鲜适中，葱香四溢',
            nutrition: '富含优质蛋白质和铁质',
            occasions: '家常菜、冬季进补',
            popularity: '北方地区最受欢迎的羊肉菜品之一'
        },
        '蒜蓉粉丝蒸扇贝': {
            origin: '粤式海鲜名菜',
            characteristics: '扇贝鲜美，蒜香浓郁',
            taste: '鲜美可口，蒜香四溢',
            nutrition: '富含优质蛋白质和牛磺酸',
            occasions: '海鲜宴、家庭聚餐',
            popularity: '广东最受欢迎的海鲜菜品之一'
        },
        '佛跳墙': {
            origin: '福建名菜，据说香气能使佛跳墙而出',
            characteristics: '料足味美，汤汁浓郁',
            taste: '浓郁鲜美，层次丰富',
            nutrition: '营养丰富，滋补养生',
            occasions: '重要宴席、年节佳品',
            popularity: '中国最著名的名贵菜品之一'
        },
        '叫花鸡': {
            origin: '江浙名菜，传说源于乞丐的烹饪方法',
            characteristics: '外皮金黄，肉质鲜嫩',
            taste: '咸鲜适中，带有特殊香气',
            nutrition: '富含蛋白质，营养均衡',
            occasions: '野餐、特色宴席',
            popularity: '独特烹饪方法的传统名菜'
        },
        '松鼠桂鱼': {
            origin: '苏州名菜，因形似松鼠而得名',
            characteristics: '外形独特，口感酥脆',
            taste: '酸甜可口，造型美观',
            nutrition: '富含优质蛋白和DHA',
            occasions: '宴请宾客、节日餐桌',
            popularity: '最具特色的淮扬菜之一'
        },
        '夫妻肺片': {
            origin: '四川成都名小吃，始于上世纪30年代',
            characteristics: '麻辣鲜香，薄片爽滑',
            taste: '麻辣突出，层次丰富',
            nutrition: '富含蛋白质和胶原蛋白',
            occasions: '开胃前菜、下酒菜',
            popularity: '最受欢迎的川味凉菜之一'
        },
        '北京烤鸭': {
            origin: '北京传统名菜，历史可追溯至元代',
            characteristics: '皮酥肉嫩，色泽红亮',
            taste: '外皮酥脆，肉质鲜美',
            nutrition: '富含优质蛋白，适量脂肪',
            occasions: '宴请宾客、特色名菜',
            popularity: '中国最著名的烤禽类菜品'
        },
        '小笼包': {
            origin: '江南特色小吃，发源于上海南翔',
            characteristics: '皮薄馅多，汤汁丰富',
            taste: '鲜美多汁，口感细腻',
            nutrition: '含有优质蛋白和多种维生素',
            occasions: '早餐、点心、宴席',
            popularity: '最受欢迎的江南点心之一'
        },
        '鲜虾云吞': {
            origin: '广东传统名点，历史悠久',
            characteristics: '皮薄馅多，虾仁鲜美',
            taste: '鲜美可口，汤汁清甜',
            nutrition: '富含优质蛋白和DHA',
            occasions: '早茶点心、日常餐点',
            popularity: '广东最受欢迎的传统点心之一'
        },
        '叉烧包': {
            origin: '粤式茶点，源于广东地区',
            characteristics: '外表蓬松，内馅多汁',
            taste: '咸甜适中，肉馅鲜美',
            nutrition: '含有丰富的蛋白质和碳水',
            occasions: '早茶点心、下午茶',
            popularity: '广东茶楼必备点心'
        },
        '酸辣汤': {
            origin: '源于四川和重庆地区',
            characteristics: '汤色乳白，酸辣可口',
            taste: '酸辣均衡，开胃爽口',
            nutrition: '含有多种维生素和矿物质',
            occasions: '开胃汤品、日常餐汤',
            popularity: '最受欢迎的中式汤品之一'
        },
        '蚂蚁上树': {
            origin: '四川传统名菜，因形似蚂蚁爬树得名',
            characteristics: '粉丝入味，肉末均匀',
            taste: '麻辣鲜香，层次分明',
            nutrition: '碳水与蛋白质搭配均衡',
            occasions: '家常菜、下饭菜',
            popularity: '深受年轻人喜爱的特色菜'
        },
        '锅包肉': {
            origin: '东北名菜，起源于哈尔滨',
            characteristics: '外酥里嫩，酸甜可口',
            taste: '酸甜适中，口感酥脆',
            nutrition: '富含蛋白质，热量较高',
            occasions: '宴客菜、家庭聚餐',
            popularity: '东北最具代表性的菜品之一'
        },
        '盐焗鸡': {
            origin: '广东潮州名菜',
            characteristics: '外皮金黄，肉质鲜嫩',
            taste: '咸香适中，回味无穷',
            nutrition: '富含优质蛋白，矿物质丰富',
            occasions: '家宴、节日餐点',
            popularity: '潮州最著名的传统名菜'
        },
        '烤鸭卷饼': {
            origin: '北京传统小吃，烤鸭的经典吃法',
            characteristics: '薄饼裹肉，配菜丰富',
            taste: '咸鲜适中，口感丰富',
            nutrition: '蛋白质与碳水搭配合理',
            occasions: '正餐、宴请',
            popularity: '最受欢迎的烤鸭食用方式'
        },
        '三杯鸡': {
            origin: '台湾名菜，因用酱油、米酒、麻油三种调味料而得名',
            characteristics: '汤汁浓郁，香气四溢',
            taste: '咸鲜香浓，回味无穷',
            nutrition: '蛋白质含量高，热量适中',
            occasions: '家常菜、下饭菜',
            popularity: '台湾最受欢迎的传统名菜之一'
        },
        '龙井虾仁': {
            origin: '杭州名菜，以西湖龙井茶入菜',
            characteristics: '虾仁鲜嫩，茶香清雅',
            taste: '清淡鲜美，回味悠长',
            nutrition: '低脂高蛋白，含茶多酚',
            occasions: '宴请、养生菜品',
            popularity: '杭州最具特色的创新菜品'
        },
        '蒜蓉粉丝蒸扇贝': {
            origin: '粤式海鲜名菜',
            characteristics: '扇贝鲜美，蒜香浓郁',
            taste: '鲜美可口，蒜香四溢',
            nutrition: '富含优质蛋白和牛磺酸',
            occasions: '海鲜宴、家庭聚餐',
            popularity: '广东最受欢迎的海鲜菜品之一'
        },
        '辣子鸡': {
            origin: '重庆特色菜品',
            characteristics: '麻辣鲜香，外酥里嫩',
            taste: '麻辣突出，香脆可口',
            nutrition: '富含蛋白质，维生素丰富',
            occasions: '下酒菜、家常菜',
            popularity: '重庆最受欢迎的特色菜之一'
        },
        '南京盐水鸭': {
            origin: '江苏南京传统名菜',
            characteristics: '肉质鲜嫩，咸淡适中',
            taste: '咸鲜适中，肉质细嫩',
            nutrition: '蛋白质含量高，脂肪适中',
            occasions: '冷盘、节日食品',
            popularity: '南京最具代表性的传统美食'
        }
    }
};

// 处理用户输入的函数
function processUserInput(input) {
    input = input.toLowerCase();
    let response = '';

    // 首先检查是否是菜品名称（直接识别菜名，不需要其他关键词）
    for (let dish in foodKnowledge.dish_introductions) {
        // 如果输入中包含菜品名称
        if (input === dish || input === dish + "?" || input === dish + "？") {
            const info = foodKnowledge.dish_introductions[dish];
            let response = `🍽️ ${dish}介绍：\n\n`;
            response += `📖 来源：${info.origin}\n\n`;
            response += `✨ 特点：${info.characteristics}\n\n`;
            response += `👅 口感：${info.taste}\n\n`;
            response += `🥗 营养：${info.nutrition}\n\n`;
            response += `🎯 适用场合：${info.occasions}\n\n`;
            response += `⭐ 受欢迎程度：${info.popularity}\n\n`;
            response += `💡 想学习这道菜的做法吗？可以问我："${dish}怎么做？"`;
            return response;
        }
    }

    // 处理感谢用语
    if (input.includes('谢谢') || 
        input.includes('感谢') || 
        input.includes('thank') || 
        input.includes('3q') ||
        input.includes('thx')) {
        const thankResponses = [
            '不客气！很高兴能帮到您 😊',
            '这是我应该做的，随时都可以问我问题哦 👨‍🍳',
            '您太客气了，能帮助您我很开心 ❤️',
            '不用谢，希望我的建议对您有帮助 🌟',
            '应该的！如果还有任何问题都可以继续问我 🎉'
        ];
        return thankResponses[Math.floor(Math.random() * thankResponses.length)];
    }

    // 处理食材相关问题
    if (input.includes('怎么挑选') || input.includes('如何保存')) {
        for (let category in foodKnowledge.ingredients_wiki) {
            for (let ingredient in foodKnowledge.ingredients_wiki[category]) {
                if (input.includes(ingredient)) {
                    const info = foodKnowledge.ingredients_wiki[category][ingredient];
                    response = `关于${ingredient}：\n`;
                    response += `挑选方法：${info.selection}\n`;
                    response += `储存方法：${info.storage}\n`;
                    response += `烹饪建议：${info.cooking_tips}\n`;
                    response += `营养价值：${info.nutrition}`;
                    return response;
                }
            }
        }
    }

    // 处理健康饮食问题
    if (input.includes('能一起吃') || input.includes('相克')) {
        for (let food in foodKnowledge.health_knowledge.饮食禁忌) {
            if (input.includes(food)) {
                return `关于${food}的饮食注意事项：${foodKnowledge.health_knowledge.饮食禁忌[food]}`;
            }
        }
    }

    // 处理特殊人群饮食问题
    if (input.includes('孕妇') || input.includes('老人') || input.includes('儿童')) {
        let group = '';
        if (input.includes('孕妇')) group = '孕妇';
        else if (input.includes('老人')) group = '老年人';
        else if (input.includes('儿童')) group = '儿童';

        if (group) {
            response = `${group}饮食建议：\n`;
            foodKnowledge.health_knowledge.特殊人群饮食[group].forEach((tip, index) => {
                response += `${index + 1}. ${tip}\n`;
            });
            return response;
        }
    }

    // 添加中西餐查询处理
    if (input.includes('中餐') || input.includes('西餐')) {
        if (input.includes('中餐')) {
            const chinese = foodKnowledge.cuisineTypes['中餐'];
            response = `中餐简介：${chinese.description}\n\n主要菜系：\n`;
            
            for (let category in chinese.categories) {
                response += `\n${category}经典菜品：\n`;
                chinese.categories[category].forEach(dish => {
                    response += `• ${dish}\n`;
                });
            }
            
            response += '\n中餐特点：\n';
            chinese.features.forEach(feature => {
                response += `💡 ${feature}\n`;
            });
        }
        
        if (input.includes('西餐')) {
            const western = foodKnowledge.cuisineTypes['西餐'];
            response = `西餐简介：${western.description}\n\n主要分类：\n`;
            
            for (let category in western.categories) {
                response += `\n${category}经典菜品：\n`;
                western.categories[category].forEach(dish => {
                    response += `• ${dish}\n`;
                });
            }
            
            response += '\n西餐特点：\n';
            western.features.forEach(feature => {
                response += `💡 ${feature}\n`;
            });
        }
        
        if (input.includes('中餐') && input.includes('西餐')) {
            response = '中餐和西餐的主要区别：\n\n';
            response += '1. 烹饪方法：\n';
            response += '   中餐：炒、炸、煮、蒸等多样化\n';
            response += '   西餐：烤、煎、炖为主\n\n';
            response += '2. 调味特点：\n';
            response += '   中餐：调味料丰富，讲究调味的层次感\n';
            response += '   西餐：调味简单，主要使用盐、胡椒、黄油\n\n';
            response += '3. 用餐方式：\n';
            response += '   中餐：共享制，多人共食\n';
            response += '   西餐：分餐制，独立用餐\n\n';
            response += '4. 食材运用：\n';
            response += '   中餐：食材切分细致，注重搭配\n';
            response += '   西餐：保持食材原形，突出本味';
        }
        
        return response;
    }

    // 检查是否在询问具体菜品的做法
    if (input.includes('怎么做') || 
        input.includes('如何做') || 
        input.includes('教我做') || 
        input.includes('做法') || 
        input.includes('菜谱') || 
        input.includes('制作方法')) {
        for (let dish in foodKnowledge.dishes) {
            if (input.includes(dish.toLowerCase())) {
                const recipe = foodKnowledge.dishes[dish];
                let response = `【${dish}】的做法：\n\n`;
                response += `简介：${recipe.description}\n\n`;
                
                response += '主料：\n';
                recipe.ingredients.main.forEach(item => {
                    response += `• ${item}\n`;
                });
                
                response += '\n配料/调味料：\n';
                recipe.ingredients.sauce.forEach(item => {
                    response += `• ${item}\n`;
                });
                
                response += '\n烹饪步骤：\n';
                recipe.steps.forEach((step, index) => {
                    response += `${index + 1}. ${step}\n`;
                });
                
                response += '\n小贴士：\n';
                recipe.tips.forEach(tip => {
                    response += `💡 ${tip}\n`;
                });
                
                return response;
            }
        }
        // 如果找不到具体菜品，给出更友好的提示
        return '抱歉，我还不知道这道菜的做法。我目前可以教您做这些菜：\n' + 
               Object.keys(foodKnowledge.dishes).map(dish => `• ${dish}`).join('\n') +
               '\n\n您可以问我任何这些菜的做法，比如：白切鸡怎么做？';
    }

    // 识别用户意图
    if (input.includes('推荐') || input.includes('建议')) {
        if (input.includes('减肥') || input.includes('瘦身')) {
            response = '减肥饮食建议：\n' + foodKnowledge.healthyDiet.减肥.join('\n');
        } else if (input.includes('增肌') || input.includes('健身')) {
            response = '增肌饮食建议：\n' + foodKnowledge.healthyDiet.增肌.join('\n');
        } else {
            response = '我可以为您推荐：\n1. 适合特定功效的食谱\n2. 特色菜系美食\n3. 烹饪方法\n请告诉我您的具体需求';
        }
    } else if (input.includes('怎么做') || input.includes('如何做')) {
        for (let method in foodKnowledge.cooking.tips) {
            if (input.includes(method)) {
                response = foodKnowledge.cooking.tips[method];
                break;
            }
        }
        if (!response) {
            response = '请告诉我具体想做什么菜，我会给您详细的建议。';
        }
    } else if (input.includes('营养') || input.includes('健康')) {
        if (input.includes('蛋白质')) {
            response = '富含蛋白质的食物：\n' + foodKnowledge.nutrition.蛋白质.join('、');
        } else if (input.includes('维生素')) {
            response = '富含维生素的食物：\n' + foodKnowledge.nutrition.维生素.join('、');
        } else {
            response = '我可以为您介绍各种食材的营养价值，请具体告诉我您想了解什么。';
        }
    } else if (input.includes('搭配') || input.includes('配菜')) {
        let mainIngredient = '';
        for (let meat of foodKnowledge.ingredients.meat) {
            if (input.includes(meat)) {
                mainIngredient = meat;
                break;
            }
        }
        if (mainIngredient) {
            const vegetables = foodKnowledge.ingredients.vegetables.slice(0, 3);
            response = `${mainIngredient}可以搭配：\n1. ${vegetables.join('\n2. ')}\n这些都是很好的搭配！`;
        } else {
            response = '请告诉我您想搭配的主料，我会给您合适的建议。';
        }
    } else if (input.includes('菜系') || input.includes('特点')) {
        for (let cuisine in foodKnowledge.cuisines) {
            if (input.includes(cuisine)) {
                response = `${cuisine}${foodKnowledge.cuisines[cuisine]}`;
                break;
            }
        }
        if (!response) {
            response = '中国有八大菜系，分别是川菜、粤菜、苏菜、鲁菜、闽菜、浙菜、湘菜、徽菜，您想了解哪个菜系呢？';
        }
    } else if (input.includes('调料') || input.includes('配料')) {
        response = '常用调料包括：' + foodKnowledge.ingredients.seasoning.join('、');
    } else if (input.includes('介绍') || input.includes('说说') || input.includes('了解')) {
        for (let dish in foodKnowledge.dish_introductions) {
            if (input.includes(dish)) {
                const info = foodKnowledge.dish_introductions[dish];
                let response = `🍽️ ${dish}介绍：\n\n`;
                response += `📖 来源：${info.origin}\n\n`;
                response += `✨ 特点：${info.characteristics}\n\n`;
                response += `👅 口感：${info.taste}\n\n`;
                response += `🥗 营养：${info.nutrition}\n\n`;
                response += `🎯 适用场合：${info.occasions}\n\n`;
                response += `⭐ 受欢迎程度：${info.popularity}\n\n`;
                response += `💡 想了解这道菜的具体做法吗？可以问我："${dish}怎么做？"`;
                return response;
            }
        }
        return '您想了解哪道菜呢？我可以为您介绍很多经典菜品的来源、特点和营养价值。';
    } else {
        response = '您可以问我关于：\n1. 菜品的烹饪方法\n2. 食材的营养搭配\n3. 特色菜系介绍\n4. 健康饮食建议\n5. 具体菜品的做法';
    }

    // 在 foodKnowledge 中添加处理简单菜品请求的逻辑
    if (input.includes('简单') && (input.includes('菜') || input.includes('做饭'))) {
        let response = '推荐以下简单易做的菜品：\n\n';
        
        // 添加快炒类推荐
        response += '🥘 快炒类：\n';
        foodKnowledge.easy_dishes['家常快炒'].forEach(dish => {
            response += `• ${dish.name}（${dish.time}）- ${dish.description}\n`;
        });
        
        // 添加凉菜推荐
        response += '\n🥗 凉菜类：\n';
        foodKnowledge.easy_dishes['简单凉菜'].forEach(dish => {
            response += `• ${dish.name}（${dish.time}）- ${dish.description}\n`;
        });
        
        // 添加主食推荐
        response += '\n🍚 快手主食：\n';
        foodKnowledge.easy_dishes['快手主食'].forEach(dish => {
            response += `• ${dish.name}（${dish.time}）- ${dish.description}\n`;
        });
        
        response += '\n💡 您想了解具体哪道菜的做法？告诉我菜名，我会给您详细的步骤说明。';
        
        return response;
    }

    // 在 processUserInput 函数中添加随机菜品介绍的处理
    if (input.includes('介绍一道菜') || input.includes('随便介绍') || input.includes('推荐一道菜')) {
        // 获取所有可介绍的菜品
        const allDishes = Object.keys(foodKnowledge.dish_introductions);
        // 随机选择一道菜
        const randomDish = allDishes[Math.floor(Math.random() * allDishes.length)];
        const info = foodKnowledge.dish_introductions[randomDish];
        
        let response = `让我为您介绍一道特色菜：\n\n`;
        response += `🍽️ ${randomDish}\n\n`;
        response += `📖 来源：${info.origin}\n\n`;
        response += `✨ 特点：${info.characteristics}\n\n`;
        response += `👅 口感：${info.taste}\n\n`;
        response += `🥗 营养：${info.nutrition}\n\n`;
        response += `🎯 适用场合：${info.occasions}\n\n`;
        response += `⭐ 受欢迎程度：${info.popularity}\n\n`;
        response += `💡 想学习这道菜的做法吗？可以问我："${randomDish}怎么做？"\n`;
        response += `或者您想听听其他菜品的介绍，可以继续说"介绍一道菜"。`;
        
        return response;
    }

    // 在 processUserInput 函数中添加推荐功能的处理
    if (input.includes('推荐')) {
        // 根据不同场景推荐菜品
        if (input.includes('家常') || input.includes('日常')) {
            let response = '为您推荐以下家常菜品：\n\n';
            response += '🏠 家常经典：\n';
            response += '• 番茄炒蛋 - 简单美味，老少皆宜\n';
            response += '• 青椒炒肉 - 下饭好菜，快手易做\n';
            response += '• 红烧肉 - 传统美味，经典不衰\n';
            return response;
        }
        
        if (input.includes('宴客') || input.includes('请客')) {
            let response = '为您推荐以下宴客菜品：\n\n';
            response += '🎊 宴请佳品：\n';
            response += '• 清蒸鲈鱼 - 鲜美可口，营养健康\n';
            response += '• 东坡肉 - 名菜佳肴，入口即化\n';
            response += '• 北京烤鸭 - 色香味俱全，经典名菜\n';
            return response;
        }
        
        if (input.includes('下酒') || input.includes('配酒')) {
            let response = '为您推荐以下下酒菜：\n\n';
            response += '🍺 下酒好菜：\n';
            response += '• 辣子鸡 - 麻辣鲜香，越吃越香\n';
            response += '• 夫妻肺片 - 麻辣爽口，开胃解腻\n';
            response += '• 盐水鸭 - 咸鲜可口，清爽不腻\n';
            return response;
        }
        
        if (input.includes('养生') || input.includes('健康')) {
            let response = '为您推荐以下养生菜品：\n\n';
            response += '🥗 养生之选：\n';
            response += '• 清炒小白菜 - 清淡爽口，营养丰富\n';
            response += '• 龙井虾仁 - 清香可口，低脂健康\n';
            response += '• 蒜蓉粉丝蒸扇贝 - 鲜美滋补，营养均衡\n';
            return response;
        }
        
        // 默认推荐
        let response = '我可以根据不同场景为您推荐菜品：\n\n';
        response += '1. 家常菜推荐 - 简单易做的日常菜品\n';
        response += '2. 宴客菜推荐 - 适合招待客人的菜品\n';
        response += '3. 下酒菜推荐 - 适合配酒的美味菜品\n';
        response += '4. 养生菜推荐 - 健康营养的菜品\n\n';
        response += '您想了解哪类菜品呢？可以说"推荐家常菜"或"推荐宴客菜"等。';
        return response;
    }

    return response;
}

// DOM 元素
const chatToggle = document.getElementById('chatToggle');
const chatContainer = document.getElementById('chatContainer');
const minimizeChat = document.getElementById('minimizeChat');
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendMessage = document.getElementById('sendMessage');

// 切换聊天窗口
chatToggle.addEventListener('click', () => {
    chatContainer.classList.toggle('active');
    chatToggle.classList.toggle('hidden');
});

minimizeChat.addEventListener('click', () => {
    chatContainer.classList.remove('active');
    chatToggle.classList.remove('hidden');
});

// 发送消息
function sendUserMessage() {
    const message = userInput.value.trim();
    if (message) {
        // 添加用户消息
        addMessage('user', message);
        
        // 添加AI回复
        setTimeout(() => {
            const response = processUserInput(message);
            addMessage('assistant', response);
        }, 500);

        userInput.value = '';
    }
}

// 添加消息到聊天窗口
function addMessage(type, content) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = content;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // 滚动到底部
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 事件监听
sendMessage.addEventListener('click', sendUserMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendUserMessage();
    }
}); 