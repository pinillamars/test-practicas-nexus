// --------------------------------------------------------------
// MASTER QUESTIONS (57 items)
// --------------------------------------------------------------
const MASTER_QUESTIONS = [];

// Fase 1
MASTER_QUESTIONS.push({ id: "P1", text: "Cuando recibes una tarea compleja:", type: "mc", options: ["A) Prefiero resolverla libremente.", "B) Necesito objetivos claros primero.", "C) Busco apoyo colaborativo inicial.", "D) Prefiero instrucciones detalladas."], phase: 1, mapping: { autonomy: {A:100, B:40, C:55, D:20}, agility: {A:85, B:40, C:50, D:20} } });
MASTER_QUESTIONS.push({ id: "P2", text: "Cuando no existe un procedimiento claro:", type: "likert", minLabel: "1 Me bloqueo", maxLabel: "5 Construyo soluciones", phase: 1, mappingDim: { autonomy: true, ambiguity: true } });
MASTER_QUESTIONS.push({ id: "P3", text: "Si detectas una mejora importante:", type: "mc", options: ["A) La implemento rápidamente.", "B) Primero valido con responsables.", "C) Busco consenso grupal.", "D) Espero aprobación formal."], phase:1, mapping: { autonomy: {A:95, B:55, C:40, D:15}, agility:{A:90,B:45,C:40,D:10} } });
MASTER_QUESTIONS.push({ id: "P4", text: "¿Qué entorno te hace rendir mejor?", type:"mc", options:["A) Alta autonomía.","B) Procesos definidos.","C) Equipos muy colaborativos.","D) Estructuras estables."], phase:1, mapping:{ autonomy:{A:100,B:30,C:50,D:20}, structure:{A:20,B:85,C:40,D:80} } });
MASTER_QUESTIONS.push({ id: "P5", text: "Cuando tu manager supervisa constantemente tu trabajo:", type:"mc", options:["A) Me siento limitado.","B) Lo considero razonable.","C) Depende de la situación.","D) Me hace sentir más seguro."], phase:1, mapping:{ autonomy:{A:90,B:35,C:50,D:10}, hierarchy:{A:85,B:50,C:50,D:10} } });
MASTER_QUESTIONS.push({ id: "P6", text: "Cuando tienes libertad total para organizarte:", type:"likert", minLabel:"1 Me cuesta muchísimo", maxLabel:"5 Rindo muchísimo mejor", phase:1, mappingDim:{ autonomy:true } });

// Fase 2
MASTER_QUESTIONS.push({ id: "P7", text: "Tu empresa cambia prioridades constantemente.", type:"mc", options:["A) Me motiva el dinamismo.","B) Intento adaptarme.","C) Necesito estabilidad.","D) Me desgasta emocionalmente."], phase:2, mapping:{ agility:{A:95,B:65,C:20,D:5}, ambiguity:{A:90,B:60,C:20,D:5} } });
MASTER_QUESTIONS.push({ id: "P8", text: "Cuando aparecen herramientas nuevas:", type:"likert", minLabel:"1 Prefiero lo conocido", maxLabel:"5 Disfruto experimentar", phase:2, mappingDim:{ agility:true, innovation:true } });
MASTER_QUESTIONS.push({ id: "P9", text: "Cuando los planes cambian inesperadamente:", type:"mc", options:["A) Improviso rápidamente.","B) Intento reorganizarme.","C) Necesito tiempo para ajustar.","D) Me genera tensión importante."], phase:2, mapping:{ agility:{A:90,B:70,C:35,D:10}, ambiguity:{A:85,B:70,C:40,D:10} } });
MASTER_QUESTIONS.push({ id: "P10", text: "¿Qué suele frustrarte más?", type:"mc", options:["A) Procesos lentos.","B) Cambios constantes sin dirección.","C) Exceso de reuniones.","D) Demasiado control jerárquico."], phase:2, mapping:{ agility:{A:85,B:30,C:55,D:80}, structure:{A:20,B:70,C:45,D:85} } });
MASTER_QUESTIONS.push({ id: "P11", text: "Cuando una empresa cambia completamente de estrategia:", type:"likert", minLabel:"1 Inseguridad", maxLabel:"5 Oportunidad", phase:2, mappingDim:{ agility:true, ambiguity:true } });
MASTER_QUESTIONS.push({ id: "P12", text: "¿Qué te representa más?", type:"mc", options:["A) Explorar nuevas formas.","B) Estabilidad operativa.","C) Equilibrio entre ambas.","D) Evitar cambios frecuentes."], phase:2, mapping:{ agility:{A:95,B:15,C:55,D:5}, innovation:{A:90,B:15,C:55,D:5} } });

// Fase 3
MASTER_QUESTIONS.push({ id: "P13", text: "Cuando una persona con autoridad toma una mala decisión:", type:"mc", options:["A) La cuestiono directamente.","B) Intento debatir racionalmente.","C) Prefiero adaptarme.","D) Sigo instrucciones aunque no esté de acuerdo."], phase:3, mapping:{ hierarchy:{A:90,B:75,C:35,D:10}, autonomy:{A:85,B:60,C:30,D:15} } });
MASTER_QUESTIONS.push({ id: "P14", text: "Tu forma ideal de organización:", type:"likert", minLabel:"1 Total improvisación", maxLabel:"5 Muy estructurada", phase:3, mappingDim:{ structure:true } });
MASTER_QUESTIONS.push({ id: "P15", text: "¿Qué estructura prefieres?", type:"mc", options:["A) Horizontal y flexible.","B) Liderazgo claro pero cercano.","C) Equilibrio autonomía y control.","D) Jerarquía definida."], phase:3, mapping:{ hierarchy:{A:85,B:55,C:50,D:20}, structure:{A:15,B:55,C:50,D:90} } });
MASTER_QUESTIONS.push({ id: "P16", text: "Cuando existen demasiadas reglas:", type:"mc", options:["A) Intento simplificarlas.","B) Analizo si son útiles.","C) Me adapto aunque limiten.","D) Me siento cómodo con normas claras."], phase:3, mapping:{ autonomy:{A:90,B:70,C:30,D:20}, structure:{A:10,B:35,C:75,D:90} } });
MASTER_QUESTIONS.push({ id: "P17", text: "Cuando no existe supervisión clara:", type:"likert", minLabel:"1 Me siento perdido", maxLabel:"5 Funciono perfectamente autónomo", phase:3, mappingDim:{ autonomy:true } });
MASTER_QUESTIONS.push({ id: "P18", text: "¿Qué entorno laboral evitarías más?", type:"mc", options:["A) Demasiado burocrático.","B) Demasiado caótico.","C) Muy competitivo.","D) Excesivamente rígido."], phase:3, mapping:{ structure:{A:85,B:20,C:50,D:90}, agility:{A:90,B:10,C:40,D:85} } });

// Fase 4
MASTER_QUESTIONS.push({ id: "P19", text: "En equipos nuevos normalmente:", type:"mc", options:["A) Conecto rápidamente.","B) Observo antes de participar.","C) Me adapto progresivamente.","D) Prefiero mantener distancia inicial."], phase:4, mapping:{ collaboration:{A:90,B:55,C:70,D:20} } });
MASTER_QUESTIONS.push({ id: "P20", text: "¿Qué entorno social prefieres?", type:"mc", options:["A) Muy dinámico y social.","B) Profesional pero cercano.","C) Tranquilo y enfocado.","D) Muy independiente."], phase:4, mapping:{ collaboration:{A:90,B:75,C:40,D:15} } });
MASTER_QUESTIONS.push({ id: "P21", text: "Cuando surgen conflictos interpersonales:", type:"likert", minLabel:"1 Evito involucrarme", maxLabel:"5 Suelo mediar activamente", phase:4, mappingDim:{ collaboration:true } });
MASTER_QUESTIONS.push({ id: "P22", text: "Cuando trabajas con perfiles muy distintos al tuyo:", type:"mc", options:["A) Me resulta estimulante.","B) Intento adaptarme.","C) Necesito tiempo.","D) Prefiero perfiles parecidos."], phase:4, mapping:{ collaboration:{A:90,B:70,C:40,D:15}, innovation:{A:85,B:50,C:35,D:15} } });
MASTER_QUESTIONS.push({ id: "P23", text: "Cuando una empresa tiene mucha actividad social interna:", type:"mc", options:["A) Me energiza muchísimo.","B) Me gusta moderadamente.","C) Depende del ambiente.","D) Me satura rápidamente."], phase:4, mapping:{ collaboration:{A:90,B:70,C:55,D:15} } });
MASTER_QUESTIONS.push({ id: "P24", text: "¿Qué valoras más en un equipo?", type:"mc", options:["A) Autonomía.","B) Comunicación.","C) Estabilidad.","D) Innovación."], phase:4, mapping:{ autonomy:{A:95,B:40,C:35,D:80}, collaboration:{A:40,B:95,C:50,D:70} } });

// Fase 5
MASTER_QUESTIONS.push({ id: "P25", text: "Cuando nadie sabe exactamente qué hacer:", type:"mc", options:["A) Intento liderar soluciones.","B) Analizo alternativas.","C) Espero más claridad.","D) Me genera bastante ansiedad."], phase:5, mapping:{ ambiguity:{A:90,B:70,C:30,D:10}, autonomy:{A:85,B:65,C:35,D:10} } });
MASTER_QUESTIONS.push({ id: "P26", text: "Cuando trabajas bajo presión:", type:"likert", minLabel:"1 Me bloqueo", maxLabel:"5 Rindo muy bien", phase:5, mappingDim:{ agility:true, resilience:true } });
MASTER_QUESTIONS.push({ id: "P27", text: "Cuando existe incertidumbre empresarial:", type:"mc", options:["A) Me motiva participar.","B) Intento adaptarme.","C) Necesito información clara.","D) Me desgasta mucho."], phase:5, mapping:{ ambiguity:{A:90,B:65,C:25,D:5}, agility:{A:85,B:70,C:30,D:5} } });
MASTER_QUESTIONS.push({ id: "P28", text: "Cuando debes decidir rápido:", type:"mc", options:["A) Actúo inmediatamente.","B) Equilibro análisis y velocidad.","C) Necesito más información.","D) Prefiero evitar errores antes que acelerar."], phase:5, mapping:{ agility:{A:90,B:80,C:35,D:20}, ambiguity:{A:85,B:75,C:35,D:20} } });
MASTER_QUESTIONS.push({ id: "P29", text: "Cuando hay demasiadas prioridades simultáneas:", type:"likert", minLabel:"1 Me saturo rápido", maxLabel:"5 Gestiono multitarea muy bien", phase:5, mappingDim:{ agility:true, resilience:true } });
MASTER_QUESTIONS.push({ id: "P30", text: "¿Qué te genera más desgaste?", type:"mc", options:["A) Micromanagement.","B) Falta total de estructura.","C) Ritmos demasiado lentos.","D) Incertidumbre continua."], phase:5, mapping:{ autonomy:{A:95,B:20,C:70,D:40}, structure:{A:10,B:85,C:70,D:45} } });

// Fase 6
MASTER_QUESTIONS.push({ id: "P31", text: "¿Qué suele motivarte más?", type:"mc", options:["A) Construir cosas nuevas.","B) Estabilidad profesional.","C) Aprendizaje continuo.","D) Impacto humano."], phase:6, mapping:{ innovation:{A:95,B:10,C:85,D:70}, collaboration:{A:40,B:20,C:60,D:90} } });
MASTER_QUESTIONS.push({ id: "P32", text: "¿Qué valoras más en una empresa?", type:"mc", options:["A) Flexibilidad.","B) Seguridad.","C) Innovación.","D) Buen ambiente."], phase:6, mapping:{ autonomy:{A:90,B:30,C:80,D:50}, structure:{A:30,B:95,C:50,D:40} } });
MASTER_QUESTIONS.push({ id: "P33", text: "Cuando piensas en crecimiento profesional:", type:"likert", minLabel:"1 Prefiero estabilidad", maxLabel:"5 Necesito retos constantes", phase:6, mappingDim:{ agility:true, innovation:true } });
MASTER_QUESTIONS.push({ id: "P34", text: "¿Qué tipo de cultura evitarías más?", type:"mc", options:["A) Excesivamente burocrática.","B) Muy impredecible.","C) Muy competitiva.","D) Muy rígida socialmente."], phase:6, mapping:{ structure:{A:95,B:15,C:50,D:70}, agility:{A:20,B:85,C:45,D:70} } });
MASTER_QUESTIONS.push({ id: "P35", text: "¿Qué describe mejor tu motivación profesional?", type:"mc", options:["A) Libertad.","B) Impacto.","C) Seguridad.","D) Innovación."], phase:6, mapping:{ autonomy:{A:95,B:50,C:10,D:80}, innovation:{A:80,B:70,C:10,D:100} } });

// Fase 7
MASTER_QUESTIONS.push({ id: "P36", text: "Trabajando remoto normalmente:", type:"likert", minLabel:"1 Pierdo productividad", maxLabel:"5 Rindo muchísimo mejor", phase:7, mappingDim:{ remoteFit:true, autonomy:true } });
MASTER_QUESTIONS.push({ id: "P37", text: "¿Qué modalidad prefieres?", type:"mc", options:["A) Remote First.","B) Híbrido flexible.","C) Presencial colaborativo.","D) Depende del proyecto."], phase:7, mapping:{ remoteFit:{A:100,B:75,C:20,D:60}, autonomy:{A:95,B:70,C:25,D:60} } });
MASTER_QUESTIONS.push({ id: "P38", text: "Cuando trabajas sin supervisión directa:", type:"mc", options:["A) Aumento productividad.","B) Mantengo rendimiento estable.","C) Necesito cierta validación.","D) Me cuesta organizarme."], phase:7, mapping:{ remoteFit:{A:100,B:75,C:30,D:5}, autonomy:{A:95,B:65,C:25,D:5} } });
MASTER_QUESTIONS.push({ id: "P39", text: "Cuando hay demasiadas reuniones online:", type:"mc", options:["A) Me agotan muchísimo.","B) Las tolero razonablemente.","C) Depende del equipo.","D) Me siento cómodo."], phase:7, mapping:{ remoteFit:{A:80,B:55,C:50,D:25}, collaboration:{A:20,B:55,C:70,D:90} } });
MASTER_QUESTIONS.push({ id: "P40", text: "¿Qué describe mejor tu estilo remoto?", type:"mc", options:["A) Muy independiente.","B) Equilibrado.","C) Necesito bastante interacción.","D) Prefiero presencialidad."], phase:7, mapping:{ remoteFit:{A:95,B:70,C:30,D:10}, autonomy:{A:95,B:65,C:25,D:5} } });

// Fase 8 (Escenarios)
const scenarios = [
    { id: "ESC1", text: "Escenario 1: Una startup cambia completamente el roadmap del producto.", options:["A) Me entusiasma el reto.","B) Intento reorganizar prioridades.","C) Necesito entender razones.","D) Preferiría mayor estabilidad."], mapping:{ agility:{A:95,B:70,C:50,D:10}, ambiguity:{A:90,B:70,C:55,D:10} } },
    { id: "ESC2", text: "Escenario 2: Tu empresa elimina procesos y deja más autonomía.", options:["A) Me motiva muchísimo.","B) Me adapto razonablemente.","C) Necesito cierta estructura.","D) Me genera inseguridad."], mapping:{ autonomy:{A:95,B:65,C:35,D:5}, structure:{A:10,B:40,C:80,D:90} } },
    { id: "ESC3", text: "Escenario 3: Debes trabajar con total libertad y cero supervisión.", options:["A) Rindo muchísimo mejor.","B) Depende de objetivos claros.","C) Necesito algo de seguimiento.","D) Prefiero supervisión frecuente."], mapping:{ autonomy:{A:100,B:65,C:25,D:5}, remoteFit:{A:95,B:65,C:30,D:5} } },
    { id: "ESC4", text: "Escenario 4: Tu empresa exige presencialidad total.", options:["A) Me adapto fácilmente.","B) Negocio flexibilidad.","C) Me afecta bastante.","D) Buscaría alternativas."], mapping:{ remoteFit:{A:20,B:70,C:85,D:95}, autonomy:{A:20,B:75,C:85,D:90} } },
    { id: "ESC5", text: "Escenario 5: Tu manager revisa constantemente cada detalle.", options:["A) Me frustra muchísimo.","B) Intento adaptarme.","C) Depende del contexto.","D) Me hace sentir más seguro."], mapping:{ autonomy:{A:95,B:45,C:55,D:5}, hierarchy:{A:90,B:45,C:55,D:5} } }
];
scenarios.forEach(s => MASTER_QUESTIONS.push({ ...s, type:"mc", phase:8 }));

// Fase 9 (Espejo)
const mirrorItems = [
    { id:"P41", text:"Necesito bastante autonomía para rendir bien.", type:"likert" },
    { id:"P42", text:"Prefiero supervisión frecuente y seguimiento constante.", type:"likert" },
    { id:"P43", text:"Los cambios frecuentes suelen motivarme.", type:"likert" },
    { id:"P44", text:"Demasiada incertidumbre me desgasta emocionalmente.", type:"likert" },
    { id:"P45", text:"Disfruto culturas rápidas y poco burocráticas.", type:"likert" },
    { id:"P46", text:"Prefiero procesos estables y altamente estructurados.", type:"likert" },
    { id:"P47", text:"Trabajo mejor cuando organizo mi tiempo libremente.", type:"likert" },
    { id:"P48", text:"Necesito interacción frecuente para mantener productividad.", type:"likert" },
    { id:"P49", text:"Me estimula experimentar nuevas formas de trabajar.", type:"likert" },
    { id:"P50", text:"Prefiero métodos probados antes que experimentar.", type:"likert" },
    { id:"P51", text:"Las estructuras horizontales suelen funcionar mejor.", type:"likert" },
    { id:"P52", text:"Las organizaciones necesitan jerarquías muy claras.", type:"likert" }
];
mirrorItems.forEach(m => MASTER_QUESTIONS.push({ ...m, phase:9, mappingDim: { } }));

// --------------------------------------------------------------
// UTILS
// --------------------------------------------------------------
function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// --------------------------------------------------------------
// MAIN
// --------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const introView = document.getElementById('introView');
    const testView = document.getElementById('testView');
    const resultView = document.getElementById('resultView');
    const startBtn = document.getElementById('startTestBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const questionContainer = document.getElementById('questionContainer');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    let currentQuestions = [];
    let userAnswers = new Map();
    let currentIndex = 0;
    let testStartTime = null;
    let answerTimestamps = [];
    function saveAnswer(questionId, value) {
        userAnswers.set(questionId, value);
        if (!answerTimestamps[currentIndex]) answerTimestamps[currentIndex] = Date.now();
        nextBtn.disabled = false;
    }
    function loadQuestion(index) {
        const q = currentQuestions[index];
        if (!q) return;
        let html = `<div class="question-text">${q.text}</div><div class="options" id="currentOptions">`;
        if (q.type === 'likert') {
            html += `<div class="likert">`;
            for (let i = 1; i <= 5; i++) {
                const checked = (userAnswers.get(q.id) == i) ? 'checked' : '';
                html += `<label><input type="radio" name="qOption" value="${i}" ${checked}> ${i}</label>`;
            }
            html += `<span style="font-size:0.7rem; margin-left:8px;">${q.minLabel || '1'} ... ${q.maxLabel || '5'}</span></div>`;
        } else {
            html += `<div class="mc-group">`;
            q.options.forEach(opt => {
                const val = opt.charAt(0);
                const checked = (userAnswers.get(q.id) === val) ? 'checked' : '';
                html += `<label class="mc-option"><input type="radio" name="qOption" value="${val}" ${checked}> ${opt}</label>`;
            });
            html += `</div>`;
        }
        html += `</div>`;
        questionContainer.innerHTML = html;
        const radios = document.querySelectorAll('#currentOptions input[type="radio"]');
        radios.forEach(radio => {
            radio.addEventListener('change', (e) => saveAnswer(q.id, e.target.value));
        });
        prevBtn.disabled = (index === 0);
        nextBtn.disabled = !userAnswers.has(q.id);
        const progress = ((index + 1) / currentQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.innerText = `Pregunta ${index + 1} / ${currentQuestions.length}`;
    }

    function goToNext() {
        if (currentIndex < currentQuestions.length - 1) {
            currentIndex++;
            loadQuestion(currentIndex);
        } else {
            finishTest();
        }
    }

    function goToPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            loadQuestion(currentIndex);
        }
    }

    // Scoring (sin cambios)
    function computeDimensionScores() {
        let dims = { autonomy:0, agility:0, structure:0, remoteFit:0, ambiguity:0, collaboration:0, hierarchy:0, innovation:0, count:{} };
        for (let [qid, rawAnswer] of userAnswers.entries()) {
            const q = MASTER_QUESTIONS.find(qq => qq.id === qid);
            if (!q) continue;
            let valNum = null;
            if (q.type === 'likert') valNum = parseInt(rawAnswer);
            else {
                const letter = rawAnswer;
                if (q.mapping) {
                    for (let [dim, mapObj] of Object.entries(q.mapping)) {
                        if (mapObj[letter] !== undefined) {
                            dims[dim] = (dims[dim] || 0) + mapObj[letter];
                            dims.count[dim] = (dims.count[dim] || 0) + 1;
                        }
                    }
                }
                continue;
            }
            if (q.mappingDim) {
                for (let dim of Object.keys(q.mappingDim)) {
                    let score = (valNum-1)*25;
                    dims[dim] = (dims[dim] || 0) + score;
                    dims.count[dim] = (dims.count[dim] || 0) + 1;
                }
            }
            if (q.id === "P2") { dims.autonomy = (dims.autonomy||0)+(valNum-1)*25; dims.ambiguity = (dims.ambiguity||0)+(valNum-1)*25; dims.count.autonomy = (dims.count.autonomy||0)+1; dims.count.ambiguity = (dims.count.ambiguity||0)+1; }
            if (q.id === "P6") { dims.autonomy = (dims.autonomy||0)+(valNum-1)*25; dims.count.autonomy = (dims.count.autonomy||0)+1; }
            if (q.id === "P8") { dims.agility = (dims.agility||0)+(valNum-1)*25; dims.innovation = (dims.innovation||0)+(valNum-1)*25; dims.count.agility = (dims.count.agility||0)+1; dims.count.innovation= (dims.count.innovation||0)+1; }
            if (q.id === "P11") { dims.agility = (dims.agility||0)+(valNum-1)*25; dims.ambiguity = (dims.ambiguity||0)+(valNum-1)*25; dims.count.agility++; dims.count.ambiguity++; }
            if (q.id === "P14") { dims.structure = (dims.structure||0)+(valNum-1)*25; dims.count.structure = (dims.count.structure||0)+1; }
            if (q.id === "P17") { dims.autonomy = (dims.autonomy||0)+(valNum-1)*25; dims.count.autonomy++; }
            if (q.id === "P21") { dims.collaboration = (dims.collaboration||0)+(valNum-1)*25; dims.count.collaboration++; }
            if (q.id === "P26") { dims.agility = (dims.agility||0)+(valNum-1)*25; dims.count.agility++; }
            if (q.id === "P29") { dims.agility = (dims.agility||0)+(valNum-1)*25; dims.count.agility++; }
            if (q.id === "P33") { dims.agility = (dims.agility||0)+(valNum-1)*25; dims.innovation = (dims.innovation||0)+(valNum-1)*25; dims.count.agility++; dims.count.innovation++; }
            if (q.id === "P36") { dims.remoteFit = (dims.remoteFit||0)+(valNum-1)*25; dims.autonomy = (dims.autonomy||0)+(valNum-1)*25; dims.count.remoteFit++; dims.count.autonomy++; }
        }
        for (let d in dims) if (dims.count[d]) dims[d] = Math.min(100, Math.max(0, dims[d] / dims.count[d]));
        return dims;
    }

    function computeCoherence() {
        const pairs = [["P41","P42"],["P43","P44"],["P45","P46"],["P47","P48"],["P49","P50"],["P51","P52"]];
        let totalDiff = 0;
        for (let [a,b] of pairs) {
            let valA = userAnswers.get(a) ? parseInt(userAnswers.get(a)) : null;
            let valB = userAnswers.get(b) ? parseInt(userAnswers.get(b)) : null;
            if (valA && valB) {
                let invertedB = 6 - valB;
                totalDiff += Math.abs(valA - invertedB);
            } else totalDiff += 2;
        }
        let maxDiff = 6 * 4;
        return Math.round(Math.max(0, 100 - (totalDiff / maxDiff)*100));
    }

    function computeCultures(dims) {
        const startup = (dims.autonomy*0.35 + dims.agility*0.3 + dims.ambiguity*0.2 + dims.innovation*0.15);
        const corporate = (dims.structure*0.4 + (100-dims.agility)*0.2 + dims.hierarchy*0.3 + (100-dims.innovation)*0.1);
        const agile = (dims.collaboration*0.4 + dims.agility*0.3 + dims.ambiguity*0.2 + dims.autonomy*0.1);
        const remoteFirst = (dims.remoteFit*0.5 + dims.autonomy*0.4 + (100-dims.collaboration)*0.1);
        const innovationLab = (dims.innovation*0.45 + dims.agility*0.3 + dims.ambiguity*0.25);
        const scaleUp = (dims.agility*0.4 + dims.autonomy*0.3 + dims.innovation*0.3);
        const humanCentered = (dims.collaboration*0.5 + dims.ambiguity*0.2 + (100-dims.structure)*0.3);
        const operational = (dims.structure*0.5 + (100-dims.agility)*0.2 + dims.hierarchy*0.3);
        return { startup, corporate, agile, remoteFirst, innovationLab, scaleUp, humanCentered, operational };
    }

    function cName(code) {
        const map = { startup:"Startup Builder", corporate:"Corporate Structured", agile:"Agile Collaborative", remoteFirst:"Remote First", innovationLab:"Innovation Lab", scaleUp:"Scale-Up Growth", humanCentered:"Human-Centered", operational:"Operational Excellence" };
        return map[code] || code;
    }

    function interpretProfile(dims, cultures) {
        if (cultures.startup > 70) return "Perfil con fuerte tolerancia a ambigüedad, autonomía y dinamismo. Ideal para startups, scale-ups y entornos agile.";
        if (cultures.corporate > 65) return "Valoras estabilidad y procesos claros. Entornos estructurados y jerárquicos potencian tu rendimiento.";
        if (cultures.agile > 65) return "Colaboración, adaptabilidad y feedback continuo te definen. Excelente en metodologías ágiles.";
        if (cultures.remoteFirst > 65) return "Autogestión e independencia. Tu mejor rendimiento es remoto o híbrido con alta libertad.";
        return "Perfil equilibrado con capacidad de adaptación a diversas culturas.";
    }

    function finishTest() {
        const missing = currentQuestions.filter(q => !userAnswers.has(q.id));
        if (missing.length) {
            alert(`Faltan ${missing.length} preguntas. Complétalas antes de finalizar.`);
            return;
        }
        const totalTime = (Date.now() - testStartTime) / 1000;
        const avgTime = totalTime / currentQuestions.length;
        const dims = computeDimensionScores();
        const coherence = computeCoherence();
        const cultures = computeCultures(dims);
        const topCultures = Object.entries(cultures).sort((a,b)=>b[1]-a[1]).slice(0,4);
        const fakeProb = coherence > 85 ? 12 : (coherence < 55 ? 68 : 28);
        
        let timeWarning = '';
        if (avgTime < 2.0) timeWarning = '<p><strong>⚠️ Atención:</strong> Tiempo medio por pregunta muy bajo (<2s). Posibles respuestas aleatorias.</p>';
        else if (totalTime < 90) timeWarning = '<p><strong>⚠️ Atención:</strong> Test completado en menos de 90 segundos. Tómalo con calma para mayor precisión.</p>';
        
        const radarLabels = ['Startup Builder', 'Corporate Structured', 'Agile Collaborative', 'Innovation Lab', 'Remote First', 'Scale-Up Growth', 'Human-Centered', 'Operational Excellence'];
        const radarData = radarLabels.map(l => cultures[l === 'Startup Builder' ? 'startup' : l === 'Corporate Structured' ? 'corporate' : l === 'Agile Collaborative' ? 'agile' : l === 'Innovation Lab' ? 'innovationLab' : l === 'Remote First' ? 'remoteFirst' : l === 'Scale-Up Growth' ? 'scaleUp' : l === 'Human-Centered' ? 'humanCentered' : 'operational']);
        
        const strengths = [], weaknesses = [];
        const nameMap = { startup:'Startup Builder', corporate:'Corporate Structured', agile:'Agile Collaborative', innovationLab:'Innovation Lab', remoteFirst:'Remote First', scaleUp:'Scale-Up Growth', humanCentered:'Human-Centered', operational:'Operational Excellence' };
        for (let [k,v] of Object.entries(cultures)) {
            if (v >= 70) strengths.push(nameMap[k]);
            if (v <= 40) weaknesses.push(nameMap[k]);
        }
        const strengthsHtml = strengths.length ? `<strong>✅ Fortalezas:</strong> ${strengths.join(', ')}` : '<strong>✅ Fortalezas:</strong> Perfil equilibrado.';
        const weaknessesHtml = weaknesses.length ? `<strong>⚠️ Áreas de mejora:</strong> ${weaknesses.join(', ')}` : '<strong>⚠️ Áreas de mejora:</strong> No se detectan debilidades significativas.';
        
        testView.style.display = 'none';
        resultView.style.display = 'block';
        resultView.innerHTML = `
            <h3> Perfil Cultural • IA Insights</h3>
            ${timeWarning}
            <p><strong>Coherencia psicométrica:</strong> ${coherence}/100 ${coherence>=75?'✔️ Consistente':'⚠️ Revisar ambivalencias'}</p>
            <p><strong>Probabilidad Fake Good:</strong> ${fakeProb}%</p>
            <div class="cultural-match"><strong> Culturas con mayor alineación:</strong><br> ${topCultures.map(([c,v])=>`<span class="match-item">${cName(c)}: ${Math.round(v)}%</span>`).join('')}</div>
            <div class="strengths-weaknesses">${strengthsHtml}<br>${weaknessesHtml}</div>
            <div class="radar-container"><canvas id="radarChart" width="400" height="400"></canvas></div>
            <p><strong> Dimensiones clave:</strong> Autonomía ${Math.round(dims.autonomy)} | Agilidad ${Math.round(dims.agility)} | Estructura ${Math.round(dims.structure)} | Remote ${Math.round(dims.remoteFit)} | Innovación ${Math.round(dims.innovation)}</p>
            <p><em>${interpretProfile(dims, cultures)}</em></p>
            <hr><small>CultureSync Nexus 2026 · Validación adaptativa.</small>
            <div style="margin-top:1.5rem;"><button id="restartBtn">↻ Volver a iniciar</button></div>
        `;
        if (typeof Chart !== 'undefined') {
            const canvas = document.getElementById('radarChart');
            if (canvas) new Chart(canvas.getContext('2d'), {
                type: 'radar', data: { labels: radarLabels, datasets: [{ label: 'Afinidad (%)', data: radarData, backgroundColor: 'rgba(0,168,232,0.2)', borderColor: '#00A8E8', borderWidth: 2, pointBackgroundColor: '#F5B041', pointBorderColor: '#0F1A2F' }] },
                options: { responsive: true, scales: { r: { beginAtZero: true, max: 100 } }, plugins: { tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${Math.round(ctx.raw)}%` } } } }
            });
        }
        document.getElementById('restartBtn')?.addEventListener('click', () => location.reload());
    }

    startBtn.addEventListener('click', () => {
        currentQuestions = shuffleArray(MASTER_QUESTIONS);
        userAnswers.clear();
        currentIndex = 0;
        answerTimestamps = new Array(currentQuestions.length);
        testStartTime = Date.now();
        introView.style.display = 'none';
        testView.style.display = 'block';
        loadQuestion(0);
    });
    prevBtn.addEventListener('click', goToPrev);
    nextBtn.addEventListener('click', goToNext);
});