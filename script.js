const TOTAL_QUESTIONS = 6;

const questionData = {
    q1: {
        title: "上任的案头——危机的嗅觉",
        correctAnswer: "B",
        concept: "报告第1节·背景叙事",
        analysis: {
            A: "资本回报率下降是效率问题，属于经济运行层面的隐患，可通过技术升级和产业调整逐步化解；但它尚未直接引发社会冲突，在政治优先级上低于社会稳定问题。",
            B: "社会二元断裂才是当年高层最警惕的核心矛盾。城乡收入差距扩大是效率问题与公平问题的叠加，而群体性信访事件激增则直接威胁社会稳定——这种'效率失衡引发公平危机'的传导链，正是科学发展观提出的现实背景。",
            C: "外部冲击脆弱性是结构性风险，但在2003年入世红利期，出口与FDI仍是增长引擎，这一问题尚未充分暴露，紧迫程度不及已经显性化的社会矛盾。"
        }
    },
    q2: {
        title: "第一份批文——增长路径的岔路口",
        correctAnswer: "C",
        concept: "第一要义是发展（动力转换）",
        analysis: {
            A: "规模经济路线是当年最主流的选择，但强化了对传统重化工业的路径依赖，是'量的扩张'而非'质的提升'，与动力转换的方向背道而驰。",
            B: "市场自发演进路线在当下极其政治正确，但在发展初期市场机制不完善的条件下，放任自流只会强化低端锁定，无法实现产业升级。",
            C: "结构调整路线看起来最'僵化且代价高昂'，但这正是科学发展观'从量变到质变'的核心要求——用短期阵痛换取长期的动力转换，是真正的科学发展。"
        }
    },
    q3: {
        title: "岁末的决算——财政盈余的投向",
        correctAnswer: "A",
        concept: "核心立场是以人为本",
        analysis: {
            A: "再分配兜底路线直接体现了'以人为本'的核心立场。以人为本不是投机取巧，而是真金白银地向底层转移支付。建立新农合、扩大低保，切实保障了最广大人民群众的基本权益，哪怕背上长远财政包袱也在所不惜。",
            B: "救企业（供给侧纾困）是保市场主体，逻辑上能稳就业，但这条路径以企业为中间环节，能否真正惠及最脆弱的群体取决于企业行为，存在传导失效的风险；且贴息贷款终究是债务工具，无法直接保障已失业或无劳动能力人群的基本生存权益。",
            C: "抢人才（人力资本路线）是投资未来，但过度集中于精英群体，忽视了广大普通民众当下的基本需求，与以人为本的普惠性相悖。"
        }
    },
    q4: {
        title: "城市的边缘——农民工的去留",
        correctAnswer: "C",
        concept: "基本要求之全面协调——缩小城乡双元结构",
        analysis: {
            A: "空间过滤路线用户籍壁垒筛选人口，是对城乡二元结构的强化和固化，与全面协调发展的要求完全相悖，且有违社会公平。",
            B: "土地城镇化路线只是在统计数字上做大城市规模，是'伪城镇化'——农民变成了城市户口，但公共服务、就业保障并未跟上，反而可能激化矛盾。",
            C: "公共服务均等化路线对应'缩小城乡双元结构的剪刀差'。顶住财政压力，逐步为外来务工人员提供平等的教育和医疗，才是真正的人的城镇化，体现了全面协调发展的内在要求。"
        }
    },
    q5: {
        title: "资源与生态——跨区博弈",
        correctAnswer: "B",
        concept: "基本要求之可持续与区域协调",
        analysis: {
            A: "庇古税（环境经济学路线）听起来极其高明，但仍然允许开采，存在不可逆的生态风险——一旦水源地遭到破坏，任何税收都无法还原；科学发展观强调生态红线的刚性约束，而非用经济补偿来'购买'破坏许可。",
            B: "主体功能区路线是真正的科学发展观做法——依靠扎实的顶层制度设计（生态红线+横向转移支付），而非市场机制的小聪明。这是最考验政府跨区协调能力的制度建设，体现了区域协调与可持续发展的统一。",
            C: "飞地经济路线是管理学的天才手笔，在统计上实现了脱贫，但山区的发展权问题并未从根本上解决，且异地建设增加了协调成本，是一种'数字游戏'。"
        }
    },
    q6: {
        title: "政策的落地——宏观与局部的权衡",
        correctAnswer: "A",
        concept: "根本方法是统筹兼顾",
        analysis: {
            A: "渐进式统筹路线完美体现了'统筹兼顾'的根本方法——用时间换空间，承担短期考核压力，寻求环保目标与就业稳定的全局最优解。虽然第一年面临通报批评，但这种系统性思考才是真正负责任的治理。",
            B: "花钱买断（市场出清路线）看似干脆，实则简单粗暴：巨额财政负债转嫁给未来，且一次性补偿无法解决矿工的长期就业问题，只是把矛盾推后而非化解。",
            C: "行政发包路线将矛盾层层下压，实行双重一票否决，给基层政府制造了不可能完成的任务，极易催生形式主义和数据造假，是对统筹兼顾的反面示范。"
        }
    }
};

let statistics = {
    q1: { A: 0, B: 0, C: 0, total: 0 },
    q2: { A: 0, B: 0, C: 0, total: 0 },
    q3: { A: 0, B: 0, C: 0, total: 0 },
    q4: { A: 0, B: 0, C: 0, total: 0 },
    q5: { A: 0, B: 0, C: 0, total: 0 },
    q6: { A: 0, B: 0, C: 0, total: 0 }
};

let userAnswers = { q1: null, q2: null, q3: null, q4: null, q5: null, q6: null };

document.addEventListener('DOMContentLoaded', loadStatistics);

function startQuestionnaire() { showSection('question1'); }

function nextQuestion(current) {
    const selected = document.querySelector(`input[name="q${current}"]:checked`);
    if (!selected) { alert('请选择一个选项后再继续'); return; }
    userAnswers[`q${current}`] = selected.value;
    showSection(`question${current + 1}`);
}

function prevQuestion(current) { showSection(`question${current - 1}`); }

function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function submitQuestionnaire() {
    const selected = document.querySelector('input[name="q6"]:checked');
    if (!selected) { alert('请选择一个选项后再提交'); return; }
    userAnswers.q6 = selected.value;
    updateStatistics();
    displayResults();
    showSection('results');
}

function updateStatistics() {
    for (let q in userAnswers) {
        const ans = userAnswers[q];
        if (ans) { statistics[q][ans]++; statistics[q].total++; }
    }
    saveStatistics();
}

function saveStatistics() {
    localStorage.setItem('questionnaireStatistics_v2', JSON.stringify(statistics));
}

function loadStatistics() {
    const saved = localStorage.getItem('questionnaireStatistics_v2');
    if (saved) statistics = JSON.parse(saved);
}

function displayResults() {
    let correctCount = 0;
    let html = '';

    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
        const key = `q${i}`;
        const userAnswer = userAnswers[key];
        const data = questionData[key];
        const isCorrect = userAnswer === data.correctAnswer;
        if (isCorrect) correctCount++;

        html += `
            <div class="result-item">
                <div class="result-question">关卡 ${i}：${data.title}</div>
                <div class="result-answer">
                    <strong>你的选择：</strong>选项 ${userAnswer}
                    ${isCorrect
                        ? '<span style="color:#28a745;margin-left:10px;">✓ 符合科学发展观理念</span>'
                        : '<span style="color:#dc3545;margin-left:10px;">✗ 可以更优化</span>'}
                </div>
                <div class="result-analysis">
                    <strong>📖 对应科学内涵：${data.concept}</strong>
                    <p><strong>标准答案：</strong>选项 ${data.correctAnswer}</p>
                    <p><strong>你的选择分析：</strong>${data.analysis[userAnswer]}</p>
                    ${!isCorrect ? `<p><strong>推荐方案分析：</strong>${data.analysis[data.correctAnswer]}</p>` : ''}
                </div>
            </div>`;
    }

    const score = (correctCount / TOTAL_QUESTIONS * 100).toFixed(0);
    const evaluations = [
        '建议系统学习科学发展观的科学内涵，深刻理解其第一要义、核心立场、基本要求和根本方法，并在实践中灵活运用。',
        '你对科学发展观有初步认识，但在实际应用中还需加强，特别是要把握好以人为本的核心立场与统筹兼顾的方法论。',
        '你对科学发展观有一定理解，但在部分关卡的判断上还可以更深入，建议结合理论背景重新审视各关卡的决策逻辑。',
        '你的大部分决策符合科学发展观理念，展现了较强的宏观治理直觉，在个别方面还可进一步优化。',
        '你的决策高度契合科学发展观的科学内涵，展现了对"第一要义是发展、核心立场是以人为本、基本要求是全面协调可持续、根本方法是统筹兼顾"的深刻理解。',
        '满分！你的六项决策完全符合科学发展观的科学内涵，展现了卓越的宏观治理洞察力。'
    ];
    const evalText = evaluations[correctCount] || evaluations[0];

    document.getElementById('resultsContent').innerHTML = `
        <div class="result-item" style="background:linear-gradient(135deg,#fff5f5 0%,#ffe8e8 100%);border-left:5px solid var(--primary-red);">
            <div class="result-question" style="font-size:1.4rem;text-align:center;color:var(--primary-red);">
                执政决策得分：${score}分（${correctCount}/${TOTAL_QUESTIONS} 题符合科学发展观）
            </div>
            <div class="result-analysis" style="background:white;margin-top:15px;">
                <p style="font-size:1.05rem;line-height:2;">${evalText}</p>
            </div>
        </div>` + html;

    displayStatistics();
}

function displayStatistics() {
    let html = '';
    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
        const key = `q${i}`;
        const data = questionData[key];
        const stats = statistics[key];
        const total = stats.total || 1;

        html += `
            <div class="stat-item">
                <div class="stat-question">关卡 ${i}：${data.title}</div>
                <div class="stat-bar-container">
                    ${['A', 'B', 'C'].map(opt => {
                        const pct = ((( stats[opt] || 0) / total) * 100).toFixed(1);
                        const isCorrect = opt === data.correctAnswer;
                        return `
                            <div class="stat-option">
                                <div class="stat-label">选项 ${opt} ${isCorrect ? '⭐' : ''}</div>
                                <div class="stat-bar-wrapper">
                                    <div class="stat-bar" style="width:${pct}%">${pct > 10 ? pct + '%' : ''}</div>
                                </div>
                                <div class="stat-percentage">${pct}%</div>
                            </div>`;
                    }).join('')}
                </div>
                <div style="margin-top:10px;font-size:0.9rem;color:#666;">总答题人数：${stats.total || 0} 人</div>
            </div>`;
    }
    document.getElementById('statisticsContent').innerHTML = html;
}

function restartQuestionnaire() {
    userAnswers = { q1: null, q2: null, q3: null, q4: null, q5: null, q6: null };
    document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
    showSection('intro');
}

document.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        const btn = document.querySelector('.section.active .btn-primary');
        if (btn) btn.click();
    }
});
