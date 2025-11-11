import { useState, useRef, React, useMemo, useEffect } from 'react';

const slides = [
    { nome: 'foto1', img: '/imagens/foto1.jpeg' },
    { nome: 'foto2', img: '/imagens/foto2.jpeg' },
    { nome: 'foto3', img: '/imagens/foto3.jpg' },
    { nome: 'foto4', img: '/imagens/foto4.jpg' },
    { nome: 'foto5', img: '/imagens/foto5.jpg' },
    { nome: 'foto6', img: '/imagens/foto6.jpg' },
    { nome: 'foto7', img: '/imagens/foto7.jpg' },
    { nome: 'foto8', img: '/imagens/foto8.jpg' },
    { nome: 'foto9', img: '/imagens/foto9.jpg' },
];

const prints = [
    {
        nome: 'p1',
        print: '/imagens/print1.jpeg',
    },
    {
        nome: 'p2',
        print: '/imagens/print2.jpeg',
    },
    {
        nome: 'p3',
        print: '/imagens/print3.jpeg',
    },
    {
        nome: 'p4',
        print: '/imagens/print4.jpeg',
    },
    {
        nome: 'p5',
        print: '/imagens/print5.jpeg',
    },
    {
        nome: 'p6',
        print: '/imagens/print6.jpeg',
    },
    {
        nome: 'p7',
        print: '/imagens/print7.jpeg',
    },
    {
        nome: 'p8',
        print: '/imagens/print8.jpeg',
    },
    {
        nome: 'p9',
        print: '/imagens/print9.jpeg',
    },

];

const texts = {
    en: {
        changeLang: 'Change language',
        mainText1:
            "You’ll look in the mirror and feel ",
        mainText2:
            "more confident, secure, and happy",
        mainText3:
            ", inside and out.",
        join: '💪 Join more than 300 students on this journey of health and self-esteem.',
        buttonMain: 'I want real results',
        section1: 'This is for you if...',
        sectionTxt1: 'Want to lose weight or get toned',
        sectionTxt12: 'without starving',
        sectionTxt13: 'or gain muscle',
        sectionTxt14: 'without overeating.',
        sectionTxt2: 'Want a',
        sectionTxt22: 'more beautiful',
        sectionTxt23: 'body, but also',
        sectionTxt24: 'healthier and stronger.',
        sectionTxt3: 'Already train but',
        sectionTxt32: 'stopped progressing.',
        sectionTxt4: 'Tried on your own',
        sectionTxt42: ', but couldn’t maintain the results.',
        sectionTxt5: 'Tired of',
        sectionTxt52: 'generic workouts',
        sectionTxt53: 'that don’t work for you.',
        sectionTxt6: 'Need someone to',
        sectionTxt62: 'truly guide you',
        sectionTxt63: ', step by step.',
        sectionTxt7: 'Want to build healthy habits',
        sectionTxt72: 'even with a busy routine.',
        wantSpot: 'I want a spot',
        realResults1: 'Real',
        realResults2: 'results',
        realResults3: 'from my students',
        transformBody: 'I want to transform my body',
        seriousWork: 'SERIOUS work,',
        works: 'a method that WORKS.',
        conversations: 'Real conversations',
        cardTitle1: 'It’s not just',
        cardTitle2: 'a workout.',
        cardText1: 'It’s a',
        cardText12: 'real plan',
        cardText2: 'that will',
        cardText22: 'change your life.',
        cardText3: '100% personalized training for your routine and goals.',
        cardText4: 'Practical nutrition tips based on your preferences.',
        cardText5: 'App with videos, instructions, and monthly updates.',
        cardText6: 'Direct follow-up with me via WhatsApp.',
        maximize: 'Maximize your results',
        workoutTips: 'Workout tips',
        workoutDesc:
            'Instructional videos with training tips to improve your routines.',
        howWorks: 'How does it work?',
        plans: 'Available Plans',
        attention1:
            '⚠️ Attention:',
        attention2:
            'after completing your purchase,',
        attention3:
            'do not close the page.',
        attention4:
            'You’ll be redirected to fill out your assessment form.',
        bestSeller: 'Best seller',
        buyButton: 'I want this plan',
        myNameIs: 'My name is',
        brunodesc1: 'I’m a Personal Trainer with over',
        brunodesc12: '15 years of experience',
        brunodesc13: ', helping hundreds of women achieve the body of their dreams with health, focus, and discipline.',
        brunoDesc2: 'Graduated in Physical Education and specialized in strength training, weight loss, and high performance, my commitment is to turn results into a lifestyle.',
        brunoDesc31: 'I’ve coached hundreds of people, even with busy schedules, and witnessed firsthand the power of consistency with the',
        brunoDesc32: 'right guidance.',
        limitedSpots: '🚨 LIMITED SPOTS',
        limitedDesc1:
            'Spots are limited to ensure my',
        limitedDesc12:
            'direct and specialized support for each client.',
        limitedDesc2:
            'If you really want to',
        limitedDesc21:
            'make a real change',
        limitedDesc22:
            '— not just try one more time — this is your chance.',
        limitedDesc3:
            'Click the button below and start building your best version today 👇',
        changeLife: 'I want to change my life',
        footer: '© Bruno Duarte 2025 - All rights reserved.',
        devBy: 'Developed by',
        analysis: 'Analysis',
        analysisDesc: 'After confirming payment, you’ll receive a detailed form to describe your routine, training level, food preferences, available schedule, injuries...',
        creatingPlan: 'Creating your plan',
        creatingPlanDesc: 'Based on your information, your plan will be built from scratch. You’ll receive your training and diet protocol within 5 business days.',
        Followup: 'Follow-up',
        FollowupDesc: 'Every week your plan will be reviewed. Adjustments will be made as needed — whether due to your feedback (difficulty, schedule change, etc.) or a strategy from me to speed up your progress.',
        Followup: 'Follow-up',
    },
    pt: {
        changeLang: 'Mudar linguagem',
        mainText1:
            'Você vai se olhar no espelho e se sentir',
        mainText2:
            ' mais confiante, seguro(a) e feliz',
        mainText3:
            ', por dentro e por fora.',
        join: '💪 Junte-se a mais de 300 alunos nessa jornada de saúde e autoestima.',
        buttonMain: 'Quero resultados de verdade',
        section1: 'Essa é pra você que...',
        sectionTxt1: 'Quer emagrecer ou definir',
        sectionTxt12: 'sem passar fome',
        sectionTxt13: 'ou ganhar massa muscular',
        sectionTxt14: 'sem comer demais.',
        sectionTxt2: 'Quer um corpo mais',
        sectionTxt22: 'bonito',
        sectionTxt23: ', mas também mais',
        sectionTxt24: 'saudável e forte.',
        sectionTxt3: 'Já treina, mas',
        sectionTxt32: 'parou de evoluir.',
        sectionTxt4: 'Já tentou sozinho(a)',
        sectionTxt42: ', mas não conseguiu manter os resultados.',
        sectionTxt5: 'Está cansado(a) de',
        sectionTxt52: 'treinos prontos e genéricos',
        sectionTxt53: 'que não funcionam pra você.',
        sectionTxt6: 'Precisa de alguém que te',
        sectionTxt62: 'acompanhe de verdade',
        sectionTxt63: ', passo a passo.',
        sectionTxt7: 'Quer criar hábitos saudáveis',
        sectionTxt72: 'mesmo com a rotina puxada.',
        wantSpot: 'Quero uma vaga',
        realResults1: 'Resultados',
        realResults2: 'Reais',
        realResults3: 'dos meus aluno(a)s',
        transformBody: 'Quero transformar meu corpo',
        seriousWork: 'trabalho SÉRIO,',
        works: 'método que FUNCIONA.',
        conversations: 'Conversas reais',
        cardTitle1: 'Não é apenas',
        cardTitle2: 'um treino.',
        cardText1: 'É um plano',
        cardText12: 'de verdade',
        cardText2: 'que vai',
        cardText22: 'mudar a sua vida.',
        cardText3: 'Treino 100% personalizado para a sua rotina e objetivo.',
        cardText4: 'Dicas práticas de alimentação de acordo com as suas preferências.',
        cardText5: 'App com vídeos, instruções e atualizações mensais.',
        cardText6: 'Acompanhamento direto comigo via WhatsApp.',
        maximize: 'Maximize os seus resultados',
        workoutTips: 'Dicas de treino',
        workoutDesc:
            'Vídeos instrutivos com dicas para melhorar seus treinos.',
        howWorks: 'Como funciona?',
        plans: 'Planos disponíveis',
        attention1:
            '⚠️ Atenção:',
        attention2:
            'após finalizar a compra,',
        attention3:
            'não feche a página.',
        attention4:
            'Você será redirecionado(a) para responder a anamnese.',
        bestSeller: 'Mais vendido',
        buyButton: 'Quero este plano',
        myNameIs: 'Meu nome é',
        brunodesc1: 'Sou Personal Trainer com mais de',
        brunodesc12: '15 anos de experiência',
        brunodesc13: ', ajudando centenas de mulheres a conquistarem o corpo dos seus sonhos com saúde, foco e disciplina.',
        brunoDesc2: 'Graduado em Educação Física e especialista em musculação, emagrecimento e alta performance, meu compromisso é transformar resultados em estilo de vida.',
        brunoDesc31: 'Já acompanhei centenas de pessoas, mesmo com rotinas apertadas, e vi de perto o poder da consistência com o',
        brunoDesc32: 'acompanhamento certo.',
        limitedSpots: '🚨 POUCAS VAGAS',
        limitedDesc1:
            'As vagas são limitadas pra garantir meu acompanhamento',
        limitedDesc12:
            'direto e especializado com cada aluno.',
        limitedDesc2:
            'Se você quer',
        limitedDesc21:
            'mudar de verdade',
        limitedDesc22:
            ', e não só tentar mais uma vez, agora é a sua chance.',
        limitedDesc3:
            'Clique no botão abaixo e comece hoje a construção da sua melhor versão 👇',
        changeLife: 'Quero mudar de vida',
        footer: '© Bruno Duarte 2025 - Todos os direitos reservados.',
        devBy: 'Desenvolvido por',
        analysis: 'Análise',
        analysisDesc: 'Após a confirmação do pagamento, você receberá um formulário detalhado onde irá descrever sua rotina, nível de treinamento, preferências alimentares, horários disponíveis, lesões e fotos do seu físico atual.',
        creatingPlan: 'Montagem do seu plano',
        creatingPlanDesc: 'Com base nas informações recebidas, seu plano será estruturado do zero. Você receberá seu protocolo de dieta e treino em até 5 dias úteis.',
        Followup: 'Acompanhamento',
        FollowupDesc: 'Toda semana seu plano será avaliado. Ajustes serão feitos conforme necessidade: seja por uma demanda sua (dificuldade de seguir, mudança de rotina etc.) ou por uma estratégia minha para acelerar seus resultados.'
    },
};

function Home() {
    const [language, setLanguage] = useState('en');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [currentVideo, setCurrentVideo] = useState(0);
    const touchStartX = useRef(null);
    const planosRef = useRef(null);

    const t = texts[language];

    const scrollToPlanos = () => {
        planosRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'pt' : 'en'));
    };

    const videos = [
        './imagens/video1.mp4',
        './imagens/video2.mp4',
        './imagens/video3.mp4'
    ];

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        if (diff > 50 && currentVideo < videos.length - 1) {
            setCurrentVideo((prev) => prev + 1); // swipe para esquerda → avançar
        } else if (diff < -50 && currentVideo > 0) {
            setCurrentVideo((prev) => prev - 1); // swipe para direita → voltar
        }

        touchStartX.current = null;
    };

    const current = slides[currentIndex];
    const printsToShow = useMemo(() => {
        // slice(5,9) => índices 5,6,7,8 => p6..p9
        return language === 'en' ? prints.slice(5, 9) : prints.slice(0, 5);
    }, [language]);
    const current2 = printsToShow[currentIndex2 % printsToShow.length];

    useEffect(() => {
        setCurrentIndex2(0);
    }, [language]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide2 = () => {
        if (!printsToShow.length) return;
        setCurrentIndex2((prev) => (prev + 1) % printsToShow.length);
    };

    const prevSlide2 = () => {
        if (!printsToShow.length) return;
        setCurrentIndex2((prev) =>
            (prev - 1 + printsToShow.length) % printsToShow.length
        );
    };

    return (
        <div>
            <div className='font-light'>
                <a
                    href="https://wa.me/553196450850?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20online."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className='buttonHover bg-green-500 rounded-full p-1.5 fixed z-50 bottom-2 right-2'>
                        <img src='./imagens/whatsapp.svg' className='w-[40px]' />
                    </div>
                </a>
                <div
                    onClick={toggleLanguage}
                    className="fixed z-50 bottom-2 left-2 cursor-pointer"
                >
                    <div className="relative w-[84px] h-[43px] bg-neutral-700 rounded-lg flex items-center p-1 transition-all duration-200 shadow-lg">
                        {/* Bandeira de fundo esquerda */}
                        <img
                            src="/imagens/eua.png"
                            alt="Português"
                            className="absolute left-2 w-[27px] h-[22px] object-cover"
                        />

                        {/* Bandeira de fundo direita */}
                        <img
                            src="/imagens/brasil.png"
                            alt="English"
                            className="absolute right-2 w-[27px] h-[22px] object-cover"
                        />

                        {/* Bolinha deslizante */}
                        <div
                            className={`absolute ${language === "pt" ? "left-[42px]" : "left-[5px]"
                                } w-[36px] h-[32px] bg-bgreen rounded flex items-center justify-center shadow-md transition-all duration-300`}
                        >
                            {language === "pt" ? (
                                <img
                                    src="/imagens/brasil.png"
                                    alt="Português"
                                    className="w-[27px] h-[20px] object-cover"
                                />
                            ) : (
                                <img
                                    src="/imagens/eua.png"
                                    alt="English"
                                    className="w-[27px] h-[20px] object-cover"
                                />
                            )}
                        </div>
                    </div>
                </div>

                <div className='text-white flex justify-center'>
                    <div className='text-center p-3 z-10 relative mt-2'>
                        <div className='flex justify-center left-[15px]'>
                            <img src='./imagens/logo.png' className='w-[130px]' />
                        </div>
                        <p className='text-[21px] font-psemibold mt-5'>{t.mainText1} <span className='text-bgreen'>{t.mainText2}</span>{t.mainText3}</p>
                        <div className='flex justify-center mt-7'>
                            <video
                                className={`bg-neutral-900 rounded-lg ${language === "pt" ? "w-[900px]" : "w-[400px]"
                                    } border border-neutral-600`}
                                src={
                                    language === "pt"
                                        ? "https://res.cloudinary.com/dsgkc7epl/video/upload/v1761693312/28-10-25_v%C3%ADdeo_final_nfcfnb.mp4"
                                        : "https://res.cloudinary.com/dwyufgknr/video/upload/v1761871423/ENGLISH_VIDEO_e7x5xz.mp4"
                                }
                                poster="./imagens/thumb2.png"
                                controls
                                playsInline
                            />
                        </div>
                        <p className='mt-7'>{t.join}</p>
                    </div>
                </div>

                <div className='text-center mt-4'>
                    <button
                        onClick={scrollToPlanos}
                        className='buttonHover bg-verde p-3 w-[80%] max-w-[400px] rounded-[8px] text-black text-[18px] font-medium'>{t.buttonMain}</button>
                </div>

                <div className='space-y-12 text-white p-3 mt-10'>
                    <div>
                        <p className='text-[26px] font-medium text-center'>{t.section1}</p>
                        <div className='flex justify-center max-w-[600px] mx-auto'>
                            <div className='mt-5 space-y-4 border border-neutral-700 p-4 rounded-[16px] text-white'>
                                <div className='flex items-center space-x-2'>
                                    <img className="w-[40px]" src="./imagens/check.png" />
                                    <p className='leading-[20px]'>{t.sectionTxt1} <span className='font-regular text-bgreen'>{t.sectionTxt12}</span> {t.sectionTxt13} <span className='font-regular text-bgreen'>{t.sectionTxt14}</span></p>
                                </div>
                                <hr className='border-1 border-neutral-700' />
                                <div className='flex items-center space-x-2'>
                                    <img className="w-[40px]" src="./imagens/check.png" />
                                    <p className='leading-[20px]'>{t.sectionTxt2} <span className='font-regular text-bgreen'>{t.sectionTxt22} </span>{t.sectionTxt23} <span className='font-regular text-bgreen'>{t.sectionTxt24}</span></p>
                                </div>
                                <hr className='border-1 border-neutral-700' />
                                <div className='flex items-center space-x-2'>
                                    <img className="w-[40px]" src="./imagens/check.png" />
                                    <p className='leading-[20px]'>{t.sectionTxt3} <span className='font-regular text-bgreen'>{t.sectionTxt32}</span></p>
                                </div>
                                <hr className='border-1 border-neutral-700' />
                                <div className='flex items-center space-x-2'>
                                    <img className="w-[40px]" src="./imagens/check.png" />
                                    <p className='leading-[20px]'><span className='font-regular text-bgreen'>{t.sectionTxt4}</span>{t.sectionTxt42}</p>
                                </div>
                                <hr className='border-1 border-neutral-700' />
                                <div className='flex items-center space-x-2'>
                                    <img className="w-[40px]" src="./imagens/check.png" />
                                    <p className='leading-[20px]'>{t.sectionTxt5} <span className='font-regular text-bgreen'>{t.sectionTxt52}</span> {t.sectionTxt53}</p>
                                </div>
                                <hr className='border-1 border-neutral-700' />
                                <div className='flex items-center space-x-2'>
                                    <img className="w-[40px]" src="./imagens/check.png" />
                                    <p className='leading-[20px]'>{t.sectionTxt6} <span className='font-regular text-bgreen'>{t.sectionTxt62}</span>{t.sectionTxt63}</p>
                                </div>
                                <hr className='border-1 border-neutral-700' />
                                <div className='flex items-center space-x-2'>
                                    <img className="w-[40px]" src="./imagens/check.png" />
                                    <p className='leading-[20px]'>{t.sectionTxt7} <span className='font-regular text-bgreen'>{t.sectionTxt72}</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center mt-8'>
                            <button
                                onClick={scrollToPlanos}
                                className='buttonHover bg-verde p-3 w-[80%] max-w-[400px] rounded-[8px] text-black text-[18px] font-medium'
                            >
                                {t.wantSpot}
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="DivAntesDepois text-center mt-10 relative rounded-[16px] bg-neutral-800 max-w-[600px] mx-auto">
                            <p className="text-[30px] font-medium -mb-2 pt-5 text-white">
                                {t.realResults1} <span className="text-bgreen">{t.realResults2}</span>
                            </p>
                            <p className="text-[26.5px] font-light mb-4 text-white">{t.realResults3}</p>

                            <div className="relative flex items-center justify-center">
                                {/* Botão voltar */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-0 z-20 bg-neutral-600 ml-1.5 buttonHover text-white rounded p-0.5 mb-14 sm:mb-0"
                                >
                                    <img className="w-[25px]" src="./imagens/setaesq.png" />
                                </button>

                                {/* Imagens Antes e Depois */}
                                <div className="w-[90%] max-w-[500px] h-auto relative">
                                    <img
                                        src={current.img}
                                        alt={`Resultado ${current.nome}`}
                                        className="w-full h-full object-cover rounded-[8px]"
                                    />
                                </div>

                                {/* Botão avançar */}
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-0 z-20 mr-1.5 bg-neutral-600 buttonHover text-white rounded p-0.5 mb-14 sm:mb-0"
                                >
                                    <img className="w-[25px]" src="./imagens/setadir.png" />
                                </button>
                            </div>

                            {/* Botão principal */}
                            <div className='text-center mt-4 pb-6'>
                                <button
                                    onClick={scrollToPlanos}
                                    className='buttonHover bg-verde p-3 w-[80%] max-w-[400px] rounded-[8px] text-black text-[18px] font-medium'
                                >
                                    {t.transformBody}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='pb-8'>
                        <div className='leading-[30px]'>
                            <p className='text-[32px] font-medium text-bgreen text-center'>{t.seriousWork}</p>
                            <p className='text-[21px] text-center'>{t.works}</p>
                        </div>
                        <div className='text-center relative bg-neutral-800 rounded-[16px] overflow-hidden p-3 mt-8 max-w-[400px] mx-auto xl:max-w-[700px]'>
                            <p className="text-[25px] mt-2">{t.conversations}</p>
                            <div className='bg-neutral-700 relative rounded-[8px] p-2 mx-auto mt-5'>
                                <div className='flex justify-center space-x-2 mt-0 relative'>
                                    <div className='w-full border border-neutral-500 rounded-[6px] relative overflow-hidden'>
                                        <div className='relative w-full max-h-[420px] xl:max-h-[700px] bg-neutral-500 overflow-hidden flex justify-center items-center'>
                                            <span
                                                onClick={prevSlide2}
                                                className='z-20 left-1 bg-neutral-500 rounded p-[2px] absolute cursor-pointer buttonHover'
                                            >
                                                <img className="w-[25px]" src="./imagens/setaesq.png" />
                                            </span>
                                            <span
                                                onClick={nextSlide2}
                                                className='z-20 right-1 bg-neutral-500 rounded p-[2px] absolute cursor-pointer hover:brightness-90 transition'
                                            >
                                                <img className="w-[25px]" src="./imagens/setadir.png" />
                                            </span>
                                            <img
                                                src='./imagens/logo.png'
                                                className='absolute w-10 right-[2px] bottom-[2px] z-10'
                                                alt='Logo'
                                            />
                                            <img
                                                src={current2.print}
                                                className='w-full h-full object-cover'
                                                alt='Antes'
                                            />
                                        </div>
                                    </div>
                                    <div className='absolute z-50'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='h-[650px] relative bg-bgreen rounded-[16px] overflow-hidden sm:w-[700px] sm:mx-auto'>
                        <div>
                            <div className='absolute left-0 text-left font-regular text-black p-3'>
                                <div className='leading-[28px]'>
                                    <p className='text-[21px]'>{t.cardTitle1}</p>
                                    <p className='text-[28px] font-psemibold'>{t.cardTitle2}</p>
                                </div>
                                <div className='mt-[120px] leading-[19px] text-[15.5px]'>
                                    <p>{t.cardText1} <span className='font-psemibold'>{t.cardText12}</span></p>
                                    <p>{t.cardText2} <span className='font-psemibold'>{t.cardText22}</span></p>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='absolute z-10 bottom-0 space-y-3 text-[14px] leading-[19px] font-medium w-full p-3'>
                                    <div className='flex justify-center space-x-3 w-full'>
                                        <div className='w-[50%] h-[105px] p-3 rounded-[8px] bg-neutral-700/50 backdrop-blur-lg text-center flex items-center' style={{ WebkitBackdropFilter: 'blur(17px)' }}>
                                            <p>{t.cardText3}</p>
                                        </div>
                                        <div className='w-[50%] h-[105px] p-3 rounded-[8px] bg-neutral-700/50 backdrop-blur-lg text-center flex items-center' style={{ WebkitBackdropFilter: 'blur(7px)' }}>
                                            <p>{t.cardText4}</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center space-x-3'>
                                        <div className='w-[50%] h-[105px] p-3 rounded-[8px] bg-neutral-700/50 backdrop-blur-lg text-center flex items-center' style={{ WebkitBackdropFilter: 'blur(17px)' }}>
                                            <p>{t.cardText5}</p>
                                        </div>
                                        <div className='w-[50%] h-[105px] p-3 rounded-[8px] bg-neutral-700/50 backdrop-blur-lg text-center flex items-center' style={{ WebkitBackdropFilter: 'blur(17px)' }}>
                                            <p>{t.cardText6}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src='./imagens/principal.png' className='absolute -right-[35px] w-[350px] mt-3' />
                        </div>
                    </div>

                    <div>
                        <p className='text-[28px] font-medium text-center leading-[31px]'>{t.maximize}</p>
                        <div
                            className='max-w-[350px] h-[430px] mx-auto overflow-hidden relative mt-6 rounded-[16px] border border-neutral-600'
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div className='flex items-center justify-center h-full relative'>
                                {videos.map((src, index) => (
                                    <video
                                        key={index}
                                        src={src}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className={`w-full h-full absolute top-0 object-cover scale-[100%] brightness-[45%] transition-opacity duration-500 ${index === currentVideo ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                                    />
                                ))}
                                <div className='absolute z-10 bottom-0 w-full p-3'>
                                    <div className='space-y-1'>
                                        <p className='font-medium text-[24px] text-bgreen'>{t.workoutTips}</p>
                                        <p className='leading-[20px] text-neutral-300'>{t.workoutDesc}</p>
                                    </div>
                                    <div className='barrinha flex justify-center mt-3'>
                                        <div className='h-[15px] p-1.5 px-10 bg-bgreen rounded-full flex justify-center items-center space-x-1.5'>
                                            {videos.map((_, index) => (
                                                <div
                                                    key={index}
                                                    className={`rounded-full transition-all duration-300 ${index === currentVideo
                                                        ? 'bg-black w-[17px] h-[7px]'
                                                        : 'bg-black w-[7px] h-[7px]'
                                                        }`}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className='text-[28px] font-medium text-center'>{t.howWorks}</p>
                        <div className='mt-6 flex space-x-3 justify-center'>
                            <div className='space-y-4 max-w-[500px]'>
                                <div className='text-[15px] p-4 space-y-3 bg-neutral-800 rounded-[16px] border border-neutral-600'>
                                    <p className='text-[20px] font-medium text-black bg-bgreen w-[30px] h-[30px] rounded-[8px] flex items-center justify-center'>1</p>
                                    <p className='text-[23px] font-medium text-bgreen'>{t.analysis}</p>
                                    <p className='text-neutral-200'>{t.analysisDesc}</p>
                                </div>

                                <div className='text-[15px] p-4 space-y-3 bg-neutral-800 rounded-[16px] border border-neutral-600'>
                                    <p className='text-[20px] font-medium text-black bg-bgreen w-[30px] h-[30px] rounded-[8px] flex items-center justify-center'>2</p>
                                    <p className='text-[23px] font-medium text-bgreen leading-[29px]'>{t.creatingPlan}</p>
                                    <p className='text-neutral-200'>{t.creatingPlanDesc}</p>
                                </div>

                                <div className='text-[15px] p-4 space-y-3 bg-neutral-800 rounded-[16px] border border-neutral-600'>
                                    <p className='text-[20px] font-medium text-black bg-bgreen w-[30px] h-[30px] rounded-[8px] flex items-center justify-center'>3</p>
                                    <p className='text-[23px] font-medium text-bgreen'>{t.Followup}</p>
                                    <p className='text-neutral-200'>{t.FollowupDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={planosRef} className="text-center relative">
                        <p className='text-[30px] font-medium text-center pb-4'>{t.plans}</p>
                        <hr className='border-1 border-neutral-700' />
                        <p className="text-[18px] font-light mt-4 mb-4">
                            <span className="text-yellow-400 font-medium">{t.attention1}</span> {t.attention2} <span className="font-medium text-red-500">{t.attention3}</span> {t.attention4}
                        </p>
                        <hr className='border-1 border-neutral-700' />
                        <div className='space-y-4 mt-6 lg:flex lg:space-x-4 lg:justify-center lg:space-y-0'>
                            <div className='border p-2 border-bgreen bg-neutral-800 rounded-[16px] text-center overflow-hidden lg:w-[370px] max-w-[470px] mx-auto lg:mx-0'>
                                <div className='bg-bgreen rounded-[8px] p-2 space-y-2 text-black'>
                                    <div className='flex justify-between'>
                                        <p className='text-[21px] font-medium pl-1'>Annual</p>
                                        <p className='bg-neutral-700 text-white rounded-[6px] font-regular flex justify-center items-center h-[26px] px-2 text-[11px]'>{t.bestSeller}</p>
                                    </div>
                                    <p className='font-medium text-[27px] text-left ml-1'>$30,90 <span className='text-[17px] font-regular'>/month</span></p>
                                    <div className='text-center pt-3 text-white'>
                                        <a
                                            href="https://buy.stripe.com/fZuaEWcbteG16LI5ogfQI0Q"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className='buttonHover font-medium bg-neutral-600 p-3 w-full rounded-[6px] text-[18px] text-verde'>{t.buyButton}</button>
                                        </a>
                                    </div>
                                </div>
                                <div className='space-y-2 p-3 text-neutral-200 text-left'>
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Workout access app</p>
                                    </div>
                                    <hr className='border-1 border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Personalized training spreadsheet</p>
                                    </div>
                                    <hr className='border-1 border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Exercise videos</p>
                                    </div>
                                    <hr className='border-1 border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'><span className="font-medium text-white">8 workouts</span> updated every 45 days</p>
                                    </div>
                                    <hr className='border-1 border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Direct support with me via WhatsApp</p>
                                    </div>
                                    <hr className='border-1 border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Complete e-book according to your goal</p>
                                    </div>
                                    <hr className='border-1 border-neutral-700' />
                                    <p className="font-extralight text-[12.5px] text-neutral-100 pb-1 text-center">Em planos anual e semestral, o cancelamento antecipado está sujeito à taxa correspondente a uma mensalidade.</p>
                                </div>
                            </div>
                            <div className='p-2 bg-neutral-800 rounded-[16px] text-center overflow-hidden lg:w-[370px] max-w-[470px] mx-auto lg:mx-0'>
                                <div className='bg-neutral-700 rounded-[8px] p-2 space-y-2'>
                                    <div className='flex justify-between'>
                                        <p className='text-[21px] font-medium pl-1'>Six Month</p>
                                    </div>
                                    <p className='font-medium text-[27px] text-left ml-1'>$35,90 <span className='text-[17px] font-regular text-neutral-300'>/month</span></p>
                                    <div className='text-center pt-3'>
                                        <a
                                            href="https://buy.stripe.com/4gMdR81wP9lH2vsdUMfQI0O"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className='buttonHover font-medium bg-verde text-black p-3 w-full rounded-[6px] text-[18px]'>{t.buyButton}</button>
                                        </a>
                                    </div>
                                </div>
                                <div className='space-y-2 p-3 text-neutral-200 text-left'>
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>App de acesso aos treinos</p>
                                    </div>
                                    <hr className='border-1 border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Planilha personalizada de Treinos</p>
                                    </div>
                                    <hr className='border-1 border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Vídeos dos exercícios</p>
                                    </div>
                                    <hr className='border-1 border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'><span className="font-medium text-white">4 treinos</span> trocados a cada 45 dias</p>
                                    </div>
                                    <hr className='border-1 border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Suporte diretamente comigo via whatsapp.</p>
                                    </div>
                                    <hr className='border-1 border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>E-book completo de acordo com o seu objetivo</p>
                                    </div>
                                    <hr className='border-1 border-neutral-700' />
                                </div>
                                <p className="font-extralight text-[12.5px] text-neutral-100 pb-1">Em planos anual e semestral, o cancelamento antecipado está sujeito à taxa correspondente a uma mensalidade.</p>
                            </div>
                            <div className='p-2 bg-neutral-800 rounded-[16px] text-center overflow-hidden lg:w-[370px] max-w-[470px] mx-auto lg:mx-0'>
                                <div className='bg-neutral-700 rounded-[8px] p-2 space-y-2'>
                                    <div className='flex justify-between'>
                                        <p className='text-[21px] font-medium pl-1'>Three month</p>
                                    </div>
                                    <p className='font-medium text-[27px] text-left ml-1'>$42,90 <span className='text-[17px] font-regular text-neutral-300'>/month</span></p>
                                    <div className='text-center pt-3'>
                                        <a
                                            href="https://buy.stripe.com/8x2dR8b7p7dzeea6skfQI0R"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className='buttonHover font-medium bg-verde text-black p-3 w-full rounded-[6px] text-[18px]'>{t.buyButton}</button>
                                        </a>
                                    </div>
                                </div>
                                <div className='space-y-2 p-3 text-neutral-200 text-left'>
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>App de acesso aos treinos</p>
                                    </div>
                                    <hr className='border-1 border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Planilha personalizada de Treinos</p>
                                    </div>
                                    <hr className='border-1 border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Vídeos dos exercícios</p>
                                    </div>
                                    <hr className='border-1 border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>2 treinos trocados a cada 45 dias</p>
                                    </div>
                                    <hr className='border-1 border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Suporte diretamente comigo via whatsapp.</p>
                                    </div>
                                    <hr className='border-1 border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/close.png" />
                                        <p className='leading-[20px]'>E-book completo de acordo com o seu objetivo</p>
                                    </div>
                                    <hr className='border-1 border-neutral-700' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-7 xl:py-10 bg-neutral-900 text-white mt-6'>
                    <div className='space-y-5 mt-5 xl:mt-0'>
                        <div className='flex justify-center'>
                            <div className='xl:flex xl:space-x-8 items-center'>
                                <div className='flex justify-center'>
                                    <div className='rounded-[8px] border border-bgreen relative overflow-hidden flex justify-center items-center w-[300px] h-[400px]'>
                                        <img src='./imagens/brunoduarte.jpg' className='absolute w-full object-cover scale-[110%] mt-[7px] mr-[30px]' />
                                    </div>
                                </div>
                                <div className='xl:max-w-[600px] max-w-[400px]'>
                                    <div className='leading-[31px] mt-7'>
                                        <p className='text-[22px]'>{t.myNameIs}</p>
                                        <p className='text-[28px] text-bgreen font-bold'>BRUNO DUARTE</p>
                                    </div>
                                    <div className='mt-7 space-y-5 text-neutral-200'>
                                        <p>{t.brunodesc1} <span className='text-bgreen font-psemibold'>{t.brunodesc12}</span>{t.brunodesc13}</p>
                                        <p>{t.brunoDesc2}</p>
                                        <p>{t.brunoDesc31} <span className='font-psemibold text-white'>{t.brunoDesc32}</span></p>
                                    </div>
                                    <div className='flex space-x-3 mt-7 pb-5'>
                                        <a href="https://www.instagram.com/brunoduartepersonal" target="_blank" rel="noopener noreferrer">
                                            <img src="./imagens/instagram.png" className="buttonHover w-[40px]" />
                                        </a>
                                        <a
                                            href="https://wa.me/553196450850?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20online."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img src="./imagens/whatsapp.png" className="buttonHover w-[40px]" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pb-2 bg-red-600'>
                    <div className='p-5 text-center text-white'>
                        <p className='text-[29px] font-bold'>{t.limitedSpots}</p>
                        <div className='space-y-5 mt-4 max-w-[400px] mx-auto'>
                            <p>{t.limitedDesc1} <span className='font-psemibold'>{t.limitedDesc12}</span></p>
                            <p>{t.limitedDesc2} <span className='font-psemibold'>{t.limitedDesc21}</span>{t.limitedDesc22}</p>
                            <p>{t.limitedDesc3}</p>
                        </div>
                        <div className='text-center mt-6'>
                            <button
                                onClick={scrollToPlanos}
                                className='buttonHover bg-verde p-4 w-full rounded-[8px] max-w-[400px] text-black text-[20px] font-psemibold'
                            >{t.changeLife}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='text-center text-white font-extralight space-y-5 p-6 bg-neutral-900'>
                    <div className='flex justify-center'>
                        <img src='./imagens/logo.png' className='w-[100px]' />
                    </div>
                    <p className='text-[15px]'>{t.footer}</p>
                    <hr className='border-1 border-neutral-700 max-w-[700px] mx-auto pb-4' />
                    <a
                        href="https://wa.me/5522988223766"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className='text-[13px] buttonHover'>{t.devBy} <span className='font-medium'>Arthur Alves</span></p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home