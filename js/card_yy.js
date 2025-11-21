const BIO_INFO = {
    cly: {
        name: "刺鳞鱼（Hatchetfish）",
        img: "img/2-1/fish/cly_xx.png",
        direction: "right",
        offset: 50,
        sections: [
            { title: "分类地位", text: "硬骨鱼纲 → 鲈形目（Stomiiformes） → Sternoptychidae 科。" },
            { title: "形态特征", text: "体型小（2–12 cm），体扁似“斧头”。\n银白或半透明，腹部具成排发光器。\n眼睛大，适应极弱光环境。" },
            { title: "生物习性", text: "分布于暮光层（200–1000 m）。\n具垂直日周期洄游：夜晚升至浅层觅食浮游动物，白天下潜避敌。\n利用发光器进行反照明伪装，减少被掠食者发现。\n捕食桡足类、糠虾与小型鱼类。" },
            { title: "生态作用", text: "深海中层带优势类群。\n是灯笼鱼、大型鱼类、乌贼等掠食者的重要食物来源，在深海食物网中承上启下。" }
        ]
    },
    dx: {
        name: "对虾（Shrimp）",
        img: "img/2-1/fish/dx_xx.png",
        direction: "left",
        offset: 50,
        sections: [
            { title: "分类地位", text: "甲壳动物门 → 十足目（Decapoda） → Penaeidae 科。" },
            { title: "形态特征", text: "成体体长约 10–20 cm，身体分为头胸部和腹部，外覆坚硬甲壳。\n体色多变（灰褐、黄褐或带红色），部分深海种呈鲜红色以适应低光环境（红色在深海相当于“隐形色”）。" },
            { title: "生物习性", text: "主要分布在温带至热带浅海大陆架和河口泥沙底质。\n夜行性，夜间活跃，常有掘洞或潜伏习性。\n食性杂，既摄食底栖藻类、碎屑，也捕食小型无脊椎动物。" },
            { title: "生态作用", text: "是底层和中层生态系统的重要组成部分。\n在食物网中连接底栖生物与鱼类。\n重要的渔业经济物种（如对虾养殖）。" }
        ]
    },
    dly: {
        name: "灯笼鱼（Shrimp）",
        img: "img/2-2/fish/dly_xx.png",
        direction: "left",
        offset: 50,
        sections: [
            { title: "分类地位", text: "硬骨鱼纲 → 鲱形目（Myctophiformes） → 灯笼鱼科（Myctophidae）。" },
            { title: "形态特征", text: "体长一般 2–15 cm，体侧细长呈纺锤形。\n身体两侧及腹部分布有特化的发光器（photophores），排列成带状或点状。" },
            { title: "生物习性", text: "是典型的中层带鱼类（200–1000 m），数量极为庞大，被称为“深海的牧草鱼”。\n夜间上浮至表层捕食浮游动物（如桡足类、糠虾），白天下降至深层隐蔽。\n利用发光器进行 反照明伪装（counter-illumination），减少在弱光环境下的影子。" },
            { title: "生态作用", text: "在深海食物网中数量最多，是许多大型鱼类、乌贼、鲸类的重要食物。\n在全球碳循环中扮演重要角色（通过日垂直洄游，把碳从表层“输送”到深层）。" }
        ]
    },
    xxwz: {
        name: "小型乌贼（Shrimp）",
        img: "img/2-2/fish/xxwz_xx.png",
        direction: "left",
        offset: 50,
        sections: [
            { title: "分类地位", text: "软体动物门 → 头足纲（Cephalopoda） → 十腕目（Teuthida）。" },
            { title: "形态特征", text: "体长通常 5–30 cm，身体柔软，呈圆筒状，具外套膜。\n具有 10 条腕（其中 2 条为捕食触腕，较长）。\n眼睛大，视觉敏锐，身体常具有色素细胞（chromatophores），能变色伪装。" },
            { title: "生物习性", text: "分布于沿海至中层海域（100–1000 m），部分种类具有垂直日周期洄游。\n肉食性，捕食鱼类、甲壳类和其他小型头足类。\n善于喷射运动，利用漏斗喷水快速逃逸。" },
            { title: "生态作用", text: "是重要的中层掠食者。在温带海洋食物网中承上启下，既捕食浮游生物，又是鱼类、鲸类的食物。\n许多种类具有经济价值（如鱿鱼类）。" }
        ]
    },
    gsm: {
        name: "管水母（Shrimp）",
        img: "img/2-2/fish/gsm_xx.png",
        direction: "right",
        offset: 50,
        sections: [
            { title: "分类地位", text: "刺胞动物门 → 钵水母纲 → 管水母目（Siphonophorae）。" },
            { title: "形态特征", text: "属于群体性浮游刺胞动物，不是单一生物，而是由许多分工明确的“个体体”（zooids）组合而成。\n体型形态极为多样，最长的可超过 30–40 m（是地球上最长的生物之一）。" },
            { title: "生物习性", text: "多分布在大洋中层水域（200–1000 m），随洋流漂浮。\n以捕食小型浮游动物为主，触手上的刺细胞释放毒素捕获猎物。\n一些种类可发光，用于吸引猎物或交流。" },
            { title: "生态作用", text: "是典型的胶质浮游生物群体，构成中层海洋生态系统的重要组成部分。\n在能量传递中起“中继”作用，同时也是鱼类和乌贼的食物。" }
        ]
    },
    cws: {
        name: "长尾鲨（Shrimp）",
        img: "img/2-3/fish/cws_xx.png",
        direction: "right",
        offset: 50,
        sections: [
            { title: "分类地位", text: "软骨鱼纲 → 鼠鲨目（Lamniformes） → 长尾鲨科（Alopiidae）。" },
            { title: "形态特征", text: "最大体长可达 6 m，其中尾鳍上叶特别长，常占身体长度的一半以上。\n体型纺锤状，背部蓝灰色，腹部白色。眼睛大，口裂相对较小，齿细密。尾部强健，能够快速摆动。" },
            { title: "生物习性", text: "广泛分布于温带和热带海洋的沿岸与外海（表层到约 500 m）。\n典型捕食策略：利用长尾鞭击鱼群，将小型鱼类（如沙丁鱼、鲱鱼、鲭鱼）击晕，再转身吞食。\n以群游小型洄游鱼类、乌贼等为食。" },
            { title: "生态作用", text: "是中上层生态系统的顶级掠食者之一。\n在调节洄游鱼类种群密度方面具有重要作用。\n由于其独特的捕食方式，被认为是海洋捕食行为进化的经典案例。" }
        ]
    },
    dwwz: {
        name: "巨枪乌贼（Shrimp）",
        img: "img/2-3/fish/dwwz_xx.png",
        direction: "right",
        offset: 50,
        sections: [
            { title: "分类地位", text: "软体动物门 → 头足纲（Cephalopoda） → 十腕目（Teuthida）。" },
            { title: "形态特征", text: "体型粗壮，体长可超过 10 m，重量可达 400–500 kg，是已知最重的乌贼。\n双眼极大（直径可达 25–30 cm），是动物界最大的眼睛，适应深海弱光。" },
            { title: "生物习性", text: "分布于深海（一般 500–1500 m，更偏南极深水区）。\n肉食性，捕食鱼类和其他头足类，可能伏击猎物。\n活动方式尚未完全清楚，推测为缓慢游动，以突然伸展长触腕捕捉猎物。" },
            { title: "生态作用", text: "是深海顶级无脊椎捕食者之一。\n主要天敌是抹香鲸，鲸体常留有乌贼触腕吸盘痕迹。\n由于稀有而神秘，在深海生态系统研究中具有标志性意义。" }
        ]
    },
    mx: {
        name: "盲虾（Shrimp）",
        img: "img/3-1/fish/mx_xx.png",
        direction: "right",
        offset: 50,
        sections: [
            { title: "分类地位", text: "甲壳动物门 → 十足目（Decapoda） → Caridea（长臂虾类）。" },
            { title: "形态特征", text: "体长约 3–6 cm，体色常为白色、半透明或偏红。\n缺乏正常发育的眼睛，取而代之的是退化的眼点或背部感光结构。" },
            { title: "生物习性", text: "多分布在深海热液喷口（1000–4000 m）或冷泉环境。\n不依赖光合作用食物链，而是依赖喷口周围的化能合成细菌。\n通过与细菌共生（如鳃或体表菌落）获得营养，或以沉积物/微生物为食。" },
            { title: "生态作用", text: "是深海极端生态系统的关键组成成员。\n代表了深海生物对黑暗和无光环境的高度适应。" }
        ]
    },
    shsq: {
        name: "深海蛇鲭（Shrimp）",
        img: "img/3-1/fish/shsq_xx.png",
        direction: "left",
        offset: 50,
        sections: [
            { title: "分类地位", text: "硬骨鱼纲 → 鲈形目（Aulopiformes） → 蛇鲭科（Bathysauridae）。" },
            { title: "形态特征", text: "体长可达 60–80 cm。\n身体细长，形似蛇与鲭鱼的结合体。大口、尖牙，眼睛相对较大。" },
            { title: "生物习性", text: "生活在 1000–3000 m 深的深海平原。\n是典型的伏击型捕食者，常潜伏在沉积物中，突然袭击经过的小鱼或甲壳类。\n生长缓慢，代谢率低，寿命较长。" },
            { title: "生态作用", text: "是深海 benthopelagic（近底-中层）环境的重要掠食者。\n在深海食物网中处于中高营养级。\n作为稀有顶级掠食者，其存在对维持深海群落结构具有重要意义。" }
        ]
    },
    shhs: {
        name: "深海海参（Shrimp）",
        img: "img/3-1/fish/shhs_xx.png",
        direction: "left",
        offset: 50,
        sections: [
            { title: "分类地位", text: "棘皮动物门 → 海参纲（Holothuroidea）。" },
            { title: "形态特征", text: "体长一般 5–20 cm，有的深海种可超过 30 cm。\n身体柔软呈圆筒状，常半透明或呈粉色、紫色。\n有疣足或小管足，用于缓慢爬行。" },
            { title: "生物习性", text: "广泛分布于深海平原（1000–6000 m）。\n以“海雪”（marine snow，即沉降的有机颗粒）和沉积物为食。\n行为缓慢，日常活动范围小。通过吞食泥沙并消化其中有机质，维持能量摄入。" },
            { title: "生态作用", text: "是深海沉积物再循环的重要“清道夫”。\n维持深海底栖系统的物质循环和养分再分配。\n在极度营养匮乏的深渊带，海参常是优势动物群体。" }
        ]
    },
    tsm: {
        name: "吞噬鳗（Shrimp）",
        img: "img/3-2/fish/tsm_xx.png",
        direction: "left",
        offset: 50,
        sections: [
            { title: "分类地位", text: "硬骨鱼纲 → 鳗鲭目（Saccopharyngiformes）。" },
            { title: "形态特征", text: "体长 1–2 m，体形极度细长。\n巨大的嘴巴可张开成球状，体积远超身体，类似鹈鹕喉囊，因此又称“鹈鹕鳗”。\n牙齿相对细小，但嘴的容量极大。尾部末端有发光器官，可发光吸引猎物。" },
            { title: "生物习性", text: "主要分布在 500–3000 m 深的海域。\n捕食方式为“机会主义”，可吞食比自身大得多的猎物，包括鱼类和甲壳类。\n代谢极低，耐受食物稀缺环境。行为神秘，很少被人类直接观察到。" },
            { title: "生态作用", text: "是深海极端掠食策略的代表。\n在深海稀疏的食物链中，凭借超大口袋捕获尽可能多的猎物。" }
        ]
    },
    shaky: {
        name: "深海𩽾𩾌鱼（Shrimp）",
        img: "img/3-2/fish/shaky_xx.png",
        direction: "left",
        offset: 50,
        sections: [
            { title: "分类地位", text: "硬骨鱼纲 → 鲉形目（Lophiiformes）。" },
            { title: "形态特征", text: "体长多在 20–40 cm，有的深海种仅 10 cm 左右。\n头大口宽，下颌长有锋利的倒刺状牙齿，可折叠并锁住猎物。\n雌鱼头顶有一根可动的“钓竿”（背鳍棘演化而来，称 illicium），末端带有发光诱饵（esca）。" },
            { title: "生物习性", text: "分布于 200–2000 m 的深海暮光层和午夜层。\n肉食性，主要捕食小型鱼类、甲壳类。\n通过生物发光诱饵吸引猎物靠近后迅速吞食。" },
            { title: "生态作用", text: "代表性深海掠食者。\n适应深海稀少食物环境，以“机会主义”策略最大化捕食成功率。" }
        ]
    },
    xrx: {
        name: "雪人蟹（Shrimp）",
        img: "img/3-3/fish/xrx_xx.png",
        direction: "left",
        offset: 50,
        sections: [
            { title: "分类地位", text: "甲壳动物门 → 十足目（Decapoda） → 异螯蟹科（Kiwaidae）。" },
            { title: "形态特征", text: "体长约 10–15 cm，通体白色或乳白色，因缺乏色素而呈现“雪白”外观。\n眼睛退化，几乎失明。\n前螯足密布长毛，毛上附着大量丝状细菌。" },
            { title: "生物习性", text: "主要栖息在深海热液喷口（>2000 m）。\n通过螯足上的毛状结构“养殖”细菌，以其作为主要食物来源。\n也可能以喷口周围的微生物或小型动物为补充食物。" },
            { title: "生态作用", text: "是深海冷泉/热液喷口独特的“农耕型甲壳动物”。\n在极端环境中通过与细菌共生，展现了深海生物对化能合成生态系统的依赖。" }
        ]
    },
    shhd: {
        name: "深海海胆（Shrimp）（Shrimp）",
        img: "img/3-3/fish/shhd_xx.png",
        direction: "left",
        offset: 50,
        sections: [
            { title: "分类地位", text: "棘皮动物门（Echinodermata）→ 棘皮动物亚门 → 海胆纲（Echinoidea）。" },
            { title: "形态特征", text: "体呈球形、盘状或心形，直径多介于 5–20 cm，部分物种可达 30 cm。\n体表密布可活动的棘刺，常为深色（如黑色、暗紫色）或透明，部分种类棘刺极度延长。\n壳板结构坚固，具管足用于移动与感知。" },
            { title: "生物习性", text: "栖息于深海平原、热液喷口、海山等环境（水深 200–5000 m）。\n食性多样：包括沉积物中有机碎屑、细菌膜、深海藻类，部分为肉食性（捕食小型无脊椎动物）。\n运动缓慢，依靠管足与棘刺配合爬行或挖掘。" },
            { title: "生态作用", text: "作为深海沉积物的“翻耕者”，促进底质物质循环”。\n是深海鱼类、海星等捕食者的重要食物来源，连接底层与上层能量流动。" }
        ]
    },
    shhx: {
        name: "深海海胆（Shrimp）（Shrimp）",
        img: "img/3-3/fish/shhx_xx.png",
        direction: "right",
        offset: 50,
        sections: [
            { title: "分类地位", text: "棘皮动物门（Echinodermata）→ 海星纲（Asteroidea）。" },
            { title: "形态特征", text: "体型多样，腕足数量通常为5–10条，部分种类可达20条以上，直径可达 1–50 cm。\n体色多为红色、橙色或苍白，适应黑暗环境。\n体表粗糙，具钙质骨板与微小棘刺，部分种类腕足末端特化为感觉结构。" },
            { title: "生物习性", text: "广泛分布于深海冷泉、热液喷口、海沟及深渊带（水深 300–6000 m）。\n多为肉食性或腐食性，捕食海绵、珊瑚、蠕虫、贝类甚至鱼类，部分为沉积物摄食者。\n运动能力弱，依靠腕足缓慢爬行。" },
            { title: "生态作用", text: "作为深海顶级捕食者之一，调控小型无脊椎动物种群结构”。\n在化能合成生态系统（如冷泉）中参与能量传递，连接底栖与水体生态。" }
        ]
    },
    jxgc: {
        name: "巨型管虫（Shrimp）（Shrimp）",
        img: "img/3-3/fish/jxgc_xx.png",
        direction: "right",
        offset: 50,
        sections: [
            { title: "分类地位", text: "环节动物门 → 多毛纲（Polychaeta） → 管虫科。" },
            { title: "形态特征", text: "成体体长可达 1.5–2.5 m，直径约 4–5 cm。\n体表被白色蛋白质管壳包裹，仅顶部有鲜红色羽状鳃冠，负责吸收硫化氢、氧气和二氧化碳。\n缺乏消化系统（无口、无胃、无肠），体内有一种称为“营养体”（trophosome）的特殊器官。" },
            { title: "生物习性", text: "栖息于深海热液喷口附近（2000–3000 m）。\n通过体内与化能合成细菌的共生关系获取营养：细菌利用硫化氢进行化学合成，产生有机物供宿主吸收。" },
            { title: "生态作用", text: "是深海化能合成生态系统的关键“初级生产者宿主”。\n为多种深海生物提供栖息环境和食物来源。" }
        ]
    }
    
};

function createBioCard() {
    const card = document.createElement("div");
    card.className = "bio-card";
    card.innerHTML = `
        <div class="bio-image-box"><img src=""></div>
        <h3></h3>
        <div class="bio-content"></div>
    `;
    document.body.appendChild(card);
    return card;
}

const card = createBioCard();
const imgBox = card.querySelector(".bio-image-box img");
const titleBox = card.querySelector("h3");
const contentBox = card.querySelector(".bio-content");

// 清理方向相关内联样式
function resetCardPosition() {
    card.style.top = "";
    card.style.bottom = "";
    card.style.left = "";
    card.style.right = "";
}

function showBio(bioId) {
    const data = BIO_INFO[bioId];
    if (!data) return;

    // 移除旧方向类
    ["top","bottom","left","right"].forEach(d => card.classList.remove(d));
    card.classList.remove("show");

    resetCardPosition(); // 清理残留样式

    card.classList.add(data.direction);

    const offset = data.offset || 20;

    // 设置初始隐藏位置
    switch(data.direction){
        case "right": card.style.right = -card.offsetWidth + "px"; card.style.top = "50%"; break;
        case "left": card.style.left = -card.offsetWidth + "px"; card.style.top = "50%"; break;
        case "top": card.style.top = -card.offsetHeight + "px"; card.style.left = "50%"; break;
        case "bottom": card.style.bottom = -card.offsetHeight + "px"; card.style.left = "50%"; break;
    }

    imgBox.src = data.img;
    titleBox.textContent = data.name;

    // 渲染 sections
    contentBox.innerHTML = "";
    data.sections.forEach(sec => {
        contentBox.innerHTML += `
            <div class="subtitle">${sec.title}</div>
            <p>${sec.text}</p>
        `;
    });

    // 延迟滑入动画
    requestAnimationFrame(() => {
        switch(data.direction){
            case "right": card.style.right = offset + "px"; break;
            case "left": card.style.left = offset + "px"; break;
            case "top": card.style.top = offset + "px"; break;
            case "bottom": card.style.bottom = offset + "px"; break;
        }
        card.classList.add("show");
    });

    // 隐藏其他全图
    document.querySelectorAll(".bio-full-image").forEach(img => img.style.opacity = "0");
    const full = document.querySelector(`img[data-bio="${bioId}-full"]`);
    if(full) full.style.opacity = "1";
}

// 绑定点击事件
document.querySelectorAll(".bio-silhouette, .bio-hotspot").forEach(el => {
    el.addEventListener("click", e => {
        e.stopPropagation();
        showBio(el.dataset.bio);
    });
});

// 点击空白关闭
document.addEventListener("mousedown", e => {
    if(!card.contains(e.target)){
        card.classList.remove("show");
        resetCardPosition();
        document.querySelectorAll(".bio-full-image").forEach(img => img.style.opacity = "0");
    }
});
