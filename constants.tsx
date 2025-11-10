import React from 'react';
import type { ProgramSection } from './types';
import { FlagIcon, BoltIcon, InfoIcon } from './components/icons';

const commonTips = (
  <div className="mt-8 p-3 border-l-4 border-yellow-400 bg-yellow-50">
    <h3 className="font-bold text-yellow-800 flex items-center gap-2">
      <InfoIcon className="w-4 h-4 text-yellow-600" />
      DICAS IMPORTANTES:
    </h3>
    <ul className="mt-2 list-disc list-inside text-yellow-700 space-y-1">
      <li>Antes de começar: faça os exercícios de aquecimento</li>
      <li>Após o treino: finalize com alongamento</li>
      <li>Faça fortalecimento entre os dias de corrida</li>
      <li className="font-semibold">Tudo isso está no módulo 'Treinos Complementares'</li>
    </ul>
  </div>
);

export const PROGRAM_CONTENT: ProgramSection[] = [
  {
    id: 'plano-5km',
    title: 'Como Iniciar', // Changed from 'Plano 5km'
    type: 'info',
    isLoggable: false,
    content: (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          Plano 5km
        </h2>
        <div className="bg-rose-50 border-l-4 border-rose-400 p-4 mb-6">
          <p className="font-semibold text-rose-800">Siga os passos abaixo para iniciar o Plano 5km:</p>
        </div>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li>Se você não tiver um relógio com GPS baixe no seu celular QUALQUER aplicativo de monitoramento, podendo ser o STRAVA ou qualquer outro que você goste!! Use para gravar seus treinos e fazer um recordatório das suas marcas para verificar sua evolução.</li>
          <li>Este programa é composto por 10 semanas de treinos, onde cada semana serão 3 treinos de corrida. Para complementar sua rotina de treino de forma saudável, procure também fazer 2 treinos de fortalecimento entre os dias de corrida.</li>
          <li>Não avance para a próxima semana sem completar a anterior</li>
          <li>Não corra dias seguidos</li>
          <li>Siga exatamente as orientações de cada treino a ser realizado, leia antes de sair pra treinar.</li>
          <li>Antes de sair para correr, (e também para os treinos de força) faça os exercícios de aquecimento [consulte o módulo treinos complementares]</li>
          <li>Após o término dos treinos, faça os exercícios de alongamento (após a corrida e após os fortalecimentos) [consulte o módulo treinos complementares]</li>
          <li>Após o terminar as 10 semanas deste programa avance para a trilha de nível 2 ou faça os treinos propostos para 'Corrida x Emagrecimento'</li>
        </ol>
      </div>
    ),
  },
  {
    id: 'controle-intensidade',
    title: 'Controle de Intensidade',
    type: 'info',
    isLoggable: false,
    content: (
       <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          Controle de Intensidade - Esforço
        </h2>
        <div className="bg-rose-50 border-l-4 border-rose-400 p-4 mb-6">
            <h3 className="font-semibold text-rose-800">Controle de Intensidade</h3>
        </div>
        <p className="text-gray-700 mb-4">Esforço A Escala de Percepção de Esforço é uma ferramenta simples e muito útil para corredores, especialmente para iniciantes usarem como um <strong>guia do nível de esforço que devem manter durante a corrida</strong>, sem precisar de equipamentos como frequencímetros.</p>
        <p className="text-gray-700 mb-4">Ela vai de 0 a 10, onde você auto-avalia, com base na sua sensação, percepção... o quão intenso está o treino, ou cada parte dele. Use essa escala durante todos os seus treinos.</p>
        <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-3">Aqui está uma explicação prática de como usar:</h4>
            <p className="mb-2"><strong>2 a 4 (Leve):</strong> A corrida é mais ritmada, mas você ainda consegue conversar tranquilamente. Esse é o ritmo ideal para aquecimentos e treinos leves.</p>
            <p className="mb-2"><strong>5 a 7 (Moderado):</strong> Você sente o coração e a respiração acelerando, mas ainda consegue falar algumas frases curtas.</p>
            <p><strong>8 a 10 (Forte):</strong> Aqui, você já está fazendo mais esforço, a respiração é pesada e fica difícil manter uma conversa. Esse ritmo é utilizado em treinos mais intensos.</p>
        </div>
      </div>
    ),
  },
  ...Array.from({ length: 10 }, (_, i) => {
    const week = i + 1;
    let duration: string | number = 45 + (i * 2); // Exemplo de progressão
    let effort = week < 4 ? '2 a 4 (Leve)' : week < 8 ? '3 a 5 (Leve a Moderado)' : '4 a 6 (Moderado)';
    let howTo = `Caminhada em ritmo contínuo e vigoroso por ${duration} minutos. Não precisa correr! Sem pausas`;
    let objective = week < 3 ? 'Adaptação' : 'Consistência';
    let workoutType = 'Caminhada Contínua';

    // Override content for Week 2
    if (week === 2) {
      duration = 45;
      objective = 'Trabalhar resistência e ritmo.';
      howTo = 'Alterne 4 minutos de caminhada com 1 minuto de corrida/trote leve';
      effort = '5 a 7 (Moderado)';
      workoutType = 'Corrida com Caminhada';
    }
    
    // Override content for Week 3
    if (week === 3) {
      duration = 45;
      objective = 'Trabalhar resistência e ritmo.';
      howTo = 'Alterne 4 minutos de caminhada com 1 minuto de corrida MODERADA (tente correr um pouco mais rápido que a semana anterior)';
      effort = '5 a 7 (Moderado)';
      workoutType = 'Corrida com Caminhada';
    }

    // Override content for Week 4
    if (week === 4) {
      duration = 44;
      objective = 'Trabalhar resistência e ritmo.';
      howTo = 'Alterne 3 minutos de caminhada com 1 minuto de corrida MODERADA';
      effort = '5 a 7 (Moderado)';
      workoutType = 'Corrida com Caminhada';
    }

    // Override content for Week 5
    if (week === 5) {
      duration = 45;
      objective = 'Trabalhar resistência e ritmo.';
      howTo = 'Alterne 3 minutos de caminhada com 2 minutos de corrida LEVE (fácil, trote)';
      effort = '5 a 7 (Moderado) [esforço total do treino]';
      workoutType = 'Corrida com Caminhada';
    }

    // Override content for Week 6
    if (week === 6) {
      duration = 45;
      objective = 'Trabalhar resistência e ritmo.';
      howTo = 'Alterne 2 minutos de caminhada com 3 minutos de corrida LEVE (fácil, trote)';
      effort = '5 a 7 (Moderado) [esforço total do treino]';
      workoutType = 'Corrida com Caminhada';
    }

    // Override content for Week 7
    if (week === 7) {
      duration = 45;
      objective = 'Trabalhar resistência e ritmo.';
      howTo = 'Alterne 2 minutos de caminhada com 1 minuto de corrida FORTE (mais rápido) com 1 minuto de corrida LEVE (trote).';
      effort = '5 a 7 (Moderado) [esforço total do treino]';
      workoutType = 'Corrida com Caminhada';
    }

    // Override content for Week 8
    if (week === 8) {
      duration = 45;
      objective = 'Trabalhar resistência e ritmo.';
      howTo = 'Alterne 1 minuto de caminhada com 1 minuto de corrida FORTE (mais rápido) com 2 minutos de corrida LEVE (trote).';
      effort = '5 a 7 (Moderado) [esforço total do treino]';
      workoutType = 'Corrida com Caminhada';
    }

    // Override content for Week 9
    if (week === 9) {
      duration = '4km';
      objective = 'Trabalhar resistência e ritmo.';
      howTo = 'Alterne corrida com caminhada até completar 4km, mas não controle o tempo no relógio como as semanas anteriores, faça de acordo com o seu fôlego e disposição física. Tente mais correr do que caminhar, a velocidade da corrida não importa ok?! O que importa é manter o movimento da corrida pelo maior tempo possível. Quando cansar as pernas ou faltar fôlego, caminhe para recuperar e volte a correr na sequência.';
      effort = '5 a 7 (Moderado) [esforço total do treino]';
      workoutType = 'Corrida com Caminhada';
    }

    // Override content for Week 10
    if (week === 10) {
      duration = '5km';
      objective = 'Trabalhar resistência e ritmo.';
      howTo = 'Alterne corrida com caminhada até completar 5km, mas não controle o tempo no relógio como as semanas anteriores, faça de acordo com o seu fôlego e disposição física. Tente mais correr do que caminhar, a velocidade da corrida não importa ok?! O que importa é manter o movimento da corrida pelo maior tempo possível. Quando cansar as pernas ou faltar fôlego, caminhe para recuperar e volte a correr na sequência.';
      effort = '5 a 7 (Moderado) [esforço total do treino]';
      workoutType = 'Corrida com Caminhada';
    }

    return {
      id: `semana-${week}`,
      title: `Semana ${week}`,
      type: 'week' as const,
      isLoggable: true,
      content: (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            <span className="text-brand-blue">Plano 5km</span> - Semana {week}
          </h2>
          {week === 10 && (
            <p className="text-lg font-semibold text-brand-green mb-4">Parabéns! Você chegou na última semana!! 💪🤗</p>
          )}
          <p className="text-lg text-gray-600 mb-6">Faça esse treino 3x nessa semana!</p>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-xl text-gray-900 mb-4">
              {workoutType}
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong className="font-semibold text-gray-800">Duração:</strong> {duration}</li>
              <li><strong className="font-semibold text-gray-800">Objetivo:</strong> {objective}</li>
              <li><strong className="font-semibold text-gray-800">Como fazer:</strong> {howTo}</li>
              <li><strong className="font-semibold text-gray-800">Escala de Esforço:</strong> {effort}</li>
            </ul>
          </div>

          <div className="mt-6 p-3 bg-blue-50 text-blue-800 rounded-lg flex items-start gap-3">
            <InfoIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"/>
            <span>Faça este treino em um percurso plano ou se preferir pode fazer na esteira sem elevação!</span>
          </div>

          {commonTips}
        </div>
      ),
    };
  }),
];