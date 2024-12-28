const questions = [
    { q: "修理电器或机械设备", group: 'R' },
    { q: "操作各种机器或工具", group: 'R' },
    { q: "在户外进行体力活动（如徒步、农活）", group: 'R' },
    { q: "维护车辆或设备", group: 'R' },
    { q: "建造或修复物品（如家具、房屋）", group: 'R' },
    { q: "参与工厂或技术生产活动", group: 'R' },
    { q: "分析数据、进行统计", group: 'I' },
    { q: "阅读科技文章或研究报告", group: 'I' },
    { q: "研究生物、化学或物理现象", group: 'I' },
    { q: "设计科学实验", group: 'I' },
    { q: "使用电脑解决问题（如编程）", group: 'I' },
    { q: "解答数学难题", group: 'I' },
    { q: "写作、创作诗歌或故事", group: 'A' },
    { q: "绘画、雕塑或摄影", group: 'A' },
    { q: "演奏乐器或作曲", group: 'A' },
    { q: "表演戏剧或舞蹈", group: 'A' },
    { q: "设计海报或装饰物品", group: 'A' },
    { q: "参与艺术展览或文化活动", group: 'A' },
    { q: "帮助他人解决生活问题", group: 'S' },
    { q: "教育或培训他人", group: 'S' },
    { q: "从事志愿服务", group: 'S' },
    { q: "参与组织社区活动", group: 'S' },
    { q: "关心他人的心理健康", group: 'S' },
    { q: "在团队中提供情感支持", group: 'S' },
    { q: "管理和领导团队", group: 'E' },
    { q: "说服他人接受自己的观点", group: 'E' },
    { q: "销售产品或推广服务", group: 'E' },
    { q: "组织活动或项目", group: 'E' },
    { q: "制定目标并推动完成", group: 'E' },
    { q: "参与企业战略规划", group: 'E' },
    { q: "管理财务或预算", group: 'C' },
    { q: "整理和归档文件", group: 'C' },
    { q: "使用表格或数据库完成任务", group: 'C' },
    { q: "按流程完成规定任务", group: 'C' },
    { q: "记录和核对数据", group: 'C' },
    { q: "执行细节明确的工作计划", group: 'C' }
];

let currentQuestionIndex = 0;
let scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `<p>${question.q}</p> <div class="radio-group"> <label><input type="radio" name="q${currentQuestionIndex}" value="1"> 1 非常不喜欢</label>
                                    <label><input type="radio" name="q${currentQuestionIndex}" value="2"> 2 不喜欢</label>
                                    <label><input type="radio" name="q${currentQuestionIndex}" value="3"> 3 一般</label>
                                    <label><input type="radio" name="q${currentQuestionIndex}" value="4"> 4 喜欢</label>
                                    <label><input type="radio" name="q${currentQuestionIndex}" value="5"> 5 非常喜欢</label> </div>`;
    document.querySelector('.buttons').style.display = 'block';
}

function nextQuestion() {
    const radios = document.querySelectorAll(`input[name="q${currentQuestionIndex}"]:checked`);
    if (radios.length > 0) {
        scores[questions[currentQuestionIndex].group] += parseInt(radios[0].value);
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            submitTest();
        }
    } else {
        alert('请选择一个选项');
    }
}

function submitTest() {
    const resultText = Object.entries(scores).sort((a, b) => b[1] - a[1]).map(([type, score]) => `<p>${type}: ${score}</p>`).join('');
    
    document.getElementById('result-text').innerHTML = resultText;
    document.querySelector('.result-container').style.display = 'block';
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('#question-container').style.display = 'none';
    document.querySelector('.result-container').style.display = 'block';
}

// 初始化显示第一个问题
displayQuestion();