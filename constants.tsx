import React from 'react';
import type { ProgramSection } from './types';
import { FlagIcon, BoltIcon, InfoIcon } from './src/components/icons';

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
    id: 'plano-10km',
    title: 'Plano 10km', // Updated title
    type: 'info',
    isLoggable: false,
    content: (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          Plano 10km
        </h2>
        <div className="bg-rose-50 border-l-4 border-rose-400 p-4 mb-6">
          <p className="font-semibold text-rose-800">Siga os passos abaixo para iniciar o Plano 10km:</p>
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
  ...Array.from({ length: 8 }, (_, i) => {
    const week = i + 1;
    let duration: string | number;
    let effort: string;
    let howTo: string;
    let objective: string;
    let workoutType: string;

    if (week === 1) {
      return {
        id: `semana-${week}`,
        title: `Semana ${week}`,
        type: 'week' as const,
        isLoggable: true,
        content: (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              <span className="text-brand-blue">Plano 10km</span> - Semana 1
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Aqui estão os treinos para esta semana:
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-4">
              <h3 className="font-bold text-xl text-gray-900 mb-2">Treino 1:</h3>
              <p className="text-gray-700">Realizar o teste de 3km.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-4">
              <h3 className="font-bold text-xl text-gray-900 mb-2">Treino 2:</h3>
              <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">LEVE</strong> por 35 minutos.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-4">
              <h3 className="font-bold text-xl text-gray-900 mb-2">Treino 3:</h3>
              <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">LEVE</strong> entre 35 e 45 minutos.</p>
            </div>

            <p className="text-brand-blue font-semibold mt-6 mb-4">
              👉 Lembre-se sempre da ESCALA DE PERCEPÇÃO DE ESFORÇO!!
            </p>

            {commonTips}
          </div>
        ),
      };
    }

    if (week === 2) {
      return {
        id: `semana-${week}`,
        title: `Semana ${week}`,
        type: 'week' as const,
        isLoggable: true,
        content: (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              <span className="text-brand-blue">Plano 10km</span> - Semana 2
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Aqui estão os treinos para esta semana:
            </p>

            <div className="mb-8">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Grupo 1</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 1:</h4>
                  <p className="text-gray-700">Faça por 40 minutos alternando ritmos: 4' Ritmo Leve x 1' Ritmo Forte</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 2:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">LEVE</strong> por 40 minutos.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 3:</h4>
                  <p className="text-gray-700">Faça por 40 minutos alternando ritmos: 4' Ritmo Leve x 1' Ritmo Forte</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 4:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">LEVE</strong> por 50 minutos.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Grupo 2</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 1:</h4>
                  <p className="text-gray-700">Faça por 30 minutos alternando ritmos: 4' Ritmo Leve x 1' Ritmo Moderado</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 2:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">LEVE</strong> por 30 minutos.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 3:</h4>
                  <p className="text-gray-700">Faça por 30 minutos alternando ritmos: 4' Ritmo Leve x 1' Ritmo Moderado</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 4:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">LEVE</strong> por 40 minutos.</p>
                </div>
              </div>
            </div>

            <p className="text-brand-blue font-semibold mt-6 mb-4">
              👉 Lembre-se sempre da ESCALA DE PERCEPÇÃO DE ESFORÇO!!
            </p>

            {commonTips}
          </div>
        ),
      };
    }

    // Original dynamic content for other weeks
    switch (week) {
      case 3:
        duration = '50 minutos';
        objective = 'Aumentar o tempo de corrida e a capacidade aeróbica.';
        howTo = 'Alterne 3 minutos de caminhada com 2 minutos de corrida leve.';
        effort = '4 a 6 (Moderado)';
        workoutType = 'Corrida com Caminhada';
        break;
      case 4:
        duration = '50 minutos';
        objective = 'Melhorar o ritmo e a consistência na corrida.';
        howTo = 'Alterne 2 minutos de caminhada com 3 minutos de corrida moderada.';
        effort = '5 a 7 (Moderado)';
        workoutType = 'Corrida com Caminhada';
        break;
      case 5:
        duration = '45 minutos';
        objective = 'Correr por períodos mais longos e fortalecer a resistência.';
        howTo = 'Faça 20 minutos de corrida contínua (leve), 5 minutos de caminhada, e mais 20 minutos de corrida contínua (leve).';
        effort = '5 a 7 (Moderado)';
        workoutType = 'Corrida Contínua Intervalada';
        break;
      case 6:
        duration = '30 minutos';
        objective = 'Atingir 5km de corrida contínua.';
        howTo = 'Corrida contínua em ritmo moderado. Tente completar 5km.';
        effort = '5 a 7 (Moderado)';
        workoutType = 'Corrida Contínua';
        break;
      case 7:
        duration = '40 minutos';
        objective = 'Aumentar a distância e a resistência em corrida contínua.';
        howTo = 'Corrida contínua em ritmo moderado.';
        effort = '5 a 7 (Moderado)';
        workoutType = 'Corrida Contínua';
        break;
      case 8:
        duration = '50 minutos';
        objective = 'Preparação para distâncias maiores, visando 8km.';
        howTo = 'Corrida contínua em ritmo moderado.';
        effort = '5 a 7 (Moderado)';
        workoutType = 'Corrida Contínua';
        break;
      default: // This default case will now only be hit if week is not 1-8
        duration = 'N/A';
        effort = 'N/A';
        howTo = 'N/A';
        objective = 'N/A';
        workoutType = 'N/A';
    }

    return {
      id: `semana-${week}`,
      title: `Semana ${week}`,
      type: 'week' as const,
      isLoggable: true,
      content: (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            <span className="text-brand-blue">Plano 10km</span> - Semana {week}
          </h2>
          {week === 8 && ( // Ajustado para a última semana ser a 8
            <p className="text-lg font-semibold text-brand-blue mb-4">Parabéns! Você chegou na última semana!! 💪🤗</p>
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