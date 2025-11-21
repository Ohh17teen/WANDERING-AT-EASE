// 创建卡片容器
let existing = document.querySelector('.fish-card');
if (existing) existing.remove();

const fishCard = document.createElement('div');
fishCard.classList.add('fish-card');
document.body.appendChild(fishCard);

// 数据库：使用 sections 分段（标题 + 内容）
const fishData = {
  fwy: {
    name: "凤尾鱼",
    img: "img/1-2/fish/fwy_xx.png",
    sections: [
      {
        title: "分类地位",
        text: "[硬骨鱼纲，鲱形目，凤尾鱼科（Engraulidae）]"
      },
      {
        title: "形态特征",
        text: "体长 10–20 cm，身体细长，嘴大，下颌突出，呈半透明状。"
      },
      {
        title: "生物习性",
        text: "群游性强，常在沿海浅水区形成大群。主要摄食浮游动物，也能滤食浮游植物。有季节性洄游，适应温带海域。"
      },
      {
        title: "生态意义",
        text: "温带沿海典型的小型洄游鱼，是多种经济鱼类和海洋哺乳动物的重要猎物。"
      }
    ]
  },
  sdy: {
    name: "沙丁鱼",
    img: "img/1-2/fish/sdy_xx.png",
    sections: [
      {
        title: "分类地位",
        text: "[硬骨鱼纲，鲱形目（Clupeiformes），鲱科（Clupeidae）]"
      },
      {
        title: "形态特征",
        text: "体长 15–30 cm，体侧银白色，成群时闪烁光泽；体型细长，侧扁。"
      },
      {
        title: "生物习性",
        text: "强烈的群游性，常形成巨型鱼群。以浮游动物（桡足类、糠虾等）为食。常作大规模季节性洄游，追随水温与食物分布。"
      },
      {
        title: "生态意义",
        text: "重要的经济鱼类，也是金枪鱼、鲨鱼、海鸟、鲸类的主要食物。"
      }
    ]
  },
  hysm: {
    name: "海月水母",
    img: "img/1-3/fish/hysm_xx.png",
    sections: [
      {
        title: "分类地位",
        text: "[刺胞动物门（Cnidaria），钵水母纲（Scyphozoa）]"
      },
      {
        title: "形态特征",
        text: "身体呈半透明的伞形，直径常为 5–40 cm。伞缘有触手，触手和口腕布满刺细胞，用于捕食与防御。身体 95%以上为水，缺乏骨骼和大脑，仅靠神经网协调运动。"
      },
      {
        title: "生物习性",
        text: "主要分布于近岸浅海，随洋流漂浮，能进行一定的收缩游动。捕食浮游动物、小鱼，靠刺丝囊麻痹猎物。具有世代交替：水母体（成体，浮游生活）与水螅体（固着在基底上）交替繁殖。"
      },
      {
        title: "生态作用",
        text: "是典型的中层捕食者，也是许多鱼类、海龟的重要食物。在部分海域常出现水母暴发（Jellyfish bloom），会影响渔业与生态平衡。"
      }
    ]
  },
  qy: {
    name: "鲭鱼群",
    img: "img/1-3/fish/qy_xx.png",
    sections: [
      {
        title: "分类地位",
        text: "[硬骨鱼纲，鲭形目（Scombriformes），鲭科（Scombridae）]"
      },
      {
        title: "形态特征",
        text: "体型细长呈纺锤形，体长 20–40 cm，背部蓝绿色或带波纹斑纹，腹部银白色。尾鳍呈新月形，适合高速游动。鳞片细小，身体光滑流线。"
      },
      {
        title: "生物习性",
        text: "属于典型的洄游性群游鱼类，常形成大规模鱼群。以小型鱼类、浮游甲壳类为食，视觉捕食能力强。活动范围广，多在表层至中层水域游弋，常随季节和洋流迁移。"
      },
      {
        title: "生态作用",
        text: "是温带近海重要的中层捕食者。作为经济鱼类，被广泛捕捞，是人类食物与渔业资源的重要组成部分。其群体性与速度使其成为大型掠食者（如金枪鱼、鲨鱼、海鸟）的食物。"
      }
    ]
  },
  dy: {
    name: "带鱼",
    img: "img/1-3/fish/dy_xx.png",
    sections: [
      {
        title: "分类地位",
        text: "[硬骨鱼纲，鲈形目（Perciformes），带鱼科（Trichiuridae）]"
      },
      {
        title: "形态特征",
        text: "身体细长而扁平，银白色，有金属光泽，形似“长带”。成鱼体长可达 1–2 m。背鳍长而连续，尾部逐渐变尖，无尾鳍。口大，下颌突出，齿锋利，适合捕食。"
      },
      {
        title: "生物习性",
        text: "多栖息于温带至热带近海大陆架水域。夜间趋光性强，常上浮至中上层活动，白天则潜入较深水层。食性为肉食性，捕食小型鱼类、乌贼、甲壳类。具有一定的季节性洄游，常与渔业生产季节相关。"
      },
      {
        title: "生态作用",
        text: "是温带及热带沿海典型的捕食性中层鱼类。重要的经济鱼类，渔业产量大。在食物网中处于中高营养级，是小型鱼类和浮游生物向高营养级传递能量的重要环节。"
      }
    ]
  }
};

// 渲染函数：接收数据并以 bio-style 排版显示（兼容 sections 或 description）
function renderFishCard(data) {

  let contentHTML = '';

  if (Array.isArray(data.sections) && data.sections.length > 0) {
    data.sections.forEach(sec => {
      contentHTML += `<div class="subtitle">${escapeHtml(sec.title)}</div><p>${escapeHtml(sec.text)}</p>`;
    });
  } else if (data.description) {

    const parts = data.description.split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);

    if (parts.length > 1) {

      parts.forEach(part => {
        const lines = part.split('\n').map(l => l.trim()).filter(Boolean);
        if (lines.length > 1 && lines[0].length <= 12 && /[\u4e00-\u9fa5]/.test(lines[0])) {
          const title = lines[0];
          const text = lines.slice(1).join('\n');
          contentHTML += `<div class="subtitle">${escapeHtml(title)}</div><p>${escapeHtml(text)}</p>`;
        } else {
          contentHTML += `<p>${escapeHtml(part)}</p>`;
        }
      });
    } else {
      contentHTML += `<p>${escapeHtml(data.description)}</p>`;
    }
  } else {
    contentHTML = `<p>暂无描述。</p>`;
  }

  fishCard.innerHTML = `
    <div class="bio-image-box"><img src="${escapeAttr(data.img || '')}" alt="${escapeAttr(data.name || '')}"></div>
    <h3>${escapeHtml(data.name || '')}</h3>
    <div class="bio-content">${contentHTML}</div>
  `;
}

// 简单的 HTML 转义，避免内容中出现意外 HTML
function escapeHtml(unsafe) {
  if (unsafe === undefined || unsafe === null) return '';
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
function escapeAttr(s) { return escapeHtml(s); }


document.querySelectorAll(".fish-hitbox").forEach(hitbox => {
  hitbox.addEventListener("click", e => {
    const type = hitbox.dataset.fish;
    const data = fishData[type];

    if (data) {
      renderFishCard(data);
      fishCard.classList.add("show");
      // 在显示卡片后，尝试把卡片滚动区域滚回顶部（以便每次打开都是从头开始）
      const contentEl = fishCard.querySelector('.bio-content');
      if (contentEl) contentEl.scrollTop = 0;
    }

    e.stopPropagation();
  });
});

// 点击卡片外 → 自动关闭（保留原逻辑）
document.addEventListener("click", e => {
  if (!fishCard.contains(e.target)) {
    fishCard.classList.remove("show");
  }
});

// Esc 键也关闭（增强体验，但不改变原有逻辑）
document.addEventListener("keydown", e => {
  if (e.key === 'Escape') fishCard.classList.remove("show");
});
