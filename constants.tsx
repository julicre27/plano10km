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
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">PLANO 10KM - ASSISTA O VÍDEO</h3>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
              src="https://www.youtube.com/embed/rKDCUFP1fzU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <h3 className="font-bold text-blue-800 mb-2">✨ Resultado do teste de 3km: ✨</h3>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            <li>Grupo 1: abaixo de 19 minutos</li>
            <li>Grupo 2: acima de 19 minutos</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Como fazer o teste de 3km:</h3>
          <p className="text-gray-700 mb-4">Esse teste precisa ser no seu máximo, combinado?</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong className="font-semibold text-red-600">⚠️ O que você deve fazer:</strong> Correr 3km o mais rápido que conseguir, no menor tempo.</li>
            <li><strong className="font-semibold text-red-600">🚨 Antes de sair correndo é importante aquecer.</strong></li>
            <li><strong className="font-semibold text-brand-blue">➡️ O que importa nesse teste é fazer 3km no menor tempo possível. Sem pausas.</strong></li>
            <li><strong className="font-semibold text-brand-blue">➡️ Não pode fazer na esteira, nem na areia.</strong></li>
            <li><strong className="font-semibold text-brand-blue">➡️ Dê preferência faça no asfalto/concreto/pista de atletismo.</strong></li>
            <li><strong className="font-semibold text-brand-blue">➡️ Procure um percurso plano e sem muitas curvas, ok?!</strong></li>
            <li><strong className="font-semibold text-brand-blue">➡️ Não fique parando o cronômetro, faça direto, sem pausas ou interrupções.</strong></li>
          </ul>
        </div>
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
            <h3 className="font-semibold text-rose-800">Treino baseado na percepção de esforço</h3>
        </div>
        <p className="text-gray-700 mb-4">
          Treino baseado na percepção de esforço significa que não existe um ritmo (pace) fixo definido. Em vez de olhar para o relógio, você precisa se guiar pelo que o corpo está sentindo no momento.
        </p>
        <p className="text-gray-700 mb-4">
          Um jeito fácil de entender:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg space-y-2">
            <p><strong>Esforço leve (3–4 numa escala de 0 a 10):</strong> consegue conversar normalmente correndo, respiração tranquila.</p>
            <p><strong>Esforço moderado (5–6):</strong> já sente que está correndo de verdade, respira mais forte, mas ainda consegue falar frases curtas.</p>
            <p><strong>Esforço forte (7–8):</strong> fica difícil falar, a respiração fica bem ofegante, é aquele ritmo que você sabe que não dá pra sustentar por muito tempo.</p>
        </div>
        <p className="text-brand-blue font-semibold mt-6 mb-4">
          👉 É como usar o corpo como termômetro em vez de usar o pace no relógio.
        </p>
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

    if (week === 3) {
      return {
        id: `semana-${week}`,
        title: `Semana ${week}`,
        type: 'week' as const,
        isLoggable: true,
        content: (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              <span className="text-brand-blue">Plano 10km</span> - Semana 3
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Aqui estão os treinos para esta semana:
            </p>

            <div className="mb-8">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Grupo 1</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 1:</h4>
                  <p className="text-gray-700">Faça por 40 minutos alternando ritmos: 3' Ritmo Leve x 1' Ritmo Forte</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 2:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">LEVE</strong> por 45 minutos.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 3:</h4>
                  <p className="text-gray-700">Faça por 45 minutos alternando ritmos: 3' Ritmo Leve x 1' Ritmo Forte</p>
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
                  <p className="text-gray-700">Faça por 35 minutos alternando ritmos: 4' Ritmo Leve x 1' Ritmo Moderado</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 2:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">LEVE</strong> por 35 minutos.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 3:</h4>
                  <p className="text-gray-700">Faça por 35 minutos alternando ritmos: 5' Ritmo Leve x 1' Ritmo Forte</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 4:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">LEVE</strong> por 45 minutos.</p>
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

    if (week === 4) {
      return {
        id: `semana-${week}`,
        title: `Semana ${week}`,
        type: 'week' as const,
        isLoggable: true,
        content: (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              <span className="text-brand-blue">Plano 10km</span> - Semana 4
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Aqui estão os treinos para esta semana:
            </p>

            <div className="mb-8">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Grupo 1</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 1:</h4>
                  <p className="text-gray-700">Faça 1km Ritmo Leve + 10 x 400 metros de corrida ritmo <strong className="font-semibold">MODERADO</strong>. Intervalo entre as séries: fique parado no lugar por até 3 minutos.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 2:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">MODERADO</strong> por 5km</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 3:</h4>
                  <p className="text-gray-700">Faça 3 séries: 1km Ritmo Leve x 500 metros Ritmo Forte</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 4:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">LEVE</strong> por 6km</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Grupo 2</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 1:</h4>
                  <p className="text-gray-700">Faça 1km Ritmo Leve + 5 x 400 metros de corrida ritmo <strong className="font-semibold">MODERADO</strong>. Intervalo entre as séries: fique parado no lugar por até 4 minutos. Após as séries faça mais 1km Ritmo Leve</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 2:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">MODERADO</strong> por 4km</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 3:</h4>
                  <p className="text-gray-700">Faça 4 séries: 600 metros Ritmo <strong className="font-semibold">LEVE</strong> x 400 metros Ritmo <strong className="font-semibold">MODERADO</strong></p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 4:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">LEVE</strong> por 5km.</p>
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

    if (week === 5) {
      return {
        id: `semana-${week}`,
        title: `Semana ${week}`,
        type: 'week' as const,
        isLoggable: true,
        content: (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              <span className="text-brand-blue">Plano 10km</span> - Semana 5
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Aqui estão os treinos para esta semana:
            </p>

            <div className="mb-8">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Grupo 1</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 1:</h4>
                  <p className="text-gray-700">Faça 1km Ritmo Leve + 10 x 400 metros de corrida ritmo <strong className="font-semibold">FORTE</strong>. Intervalo entre as séries: fique parado no lugar por até 3 minutos.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 2:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">MODERADO</strong> por 5km</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 3:</h4>
                  <p className="text-gray-700">Faça 4 séries: 1km Ritmo Leve x 500 metros Ritmo Forte</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 4:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">LEVE</strong> por 7km</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Grupo 2</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 1:</h4>
                  <p className="text-gray-700">Faça 1km Ritmo Leve + 8 x 400 metros de corrida ritmo <strong className="font-semibold">MODERADO</strong>. Intervalo entre as séries: fique parado no lugar por até 4 minutos. Após as séries faça mais 1km Ritmo Leve</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 2:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">MODERADO</strong> por 5km</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 3:</h4>
                  <p className="text-gray-700">Faça 5 séries: 600 metros Ritmo <strong className="font-semibold">LEVE</strong> x 400 metros Ritmo <strong className="font-semibold">MODERADO</strong></p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 4:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">LEVE</strong> por 6km.</p>
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

    if (week === 6) {
      return {
        id: `semana-${week}`,
        title: `Semana ${week}`,
        type: 'week' as const,
        isLoggable: true,
        content: (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              <span className="text-brand-blue">Plano 10km</span> - Semana 6
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Aqui estão os treinos para esta semana:
            </p>

            <div className="mb-8">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Grupo 1</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 1:</h4>
                  <p className="text-gray-700">Faça 1km Ritmo Leve + 10 x 400 metros de corrida ritmo <strong className="font-semibold">FORTE</strong>. Intervalo entre as séries: fique parado no lugar por até 2 minutos.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 2:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">MODERADO</strong> por 6km</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 3:</h4>
                  <p className="text-gray-700">Faça 4 séries: 1km Ritmo Leve x 200 metros Ritmo <strong className="font-semibold">MUITO FORTE</strong> x 200 metros Ritmo <strong className="font-semibold">MODERADO</strong></p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 4:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">LEVE</strong> por 8km</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Grupo 2</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 1:</h4>
                  <p className="text-gray-700">Faça 1km Ritmo Leve + 8 x 400 metros de corrida ritmo <strong className="font-semibold">MODERADO</strong>. Intervalo entre as séries: fique parado no lugar por até 3 minutos. Após as séries faça mais 1km Ritmo Leve</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 2:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">MODERADO</strong> por 5km</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 3:</h4>
                  <p className="text-gray-700">Faça 5 séries: 600 metros Ritmo <strong className="font-semibold">LEVE</strong> x 100 metros Ritmo <strong className="font-semibold">FORTE</strong> x 300 metros <strong className="font-semibold">MODERADO</strong></p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 4:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">LEVE</strong> por 7km.</p>
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

    if (week === 7) {
      return {
        id: `semana-${week}`,
        title: `Semana ${week}`,
        type: 'week' as const,
        isLoggable: true,
        content: (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              <span className="text-brand-blue">Plano 10km</span> - Semana 7
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Aqui estão os treinos para esta semana:
            </p>

            <div className="mb-8">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Grupo 1</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 1:</h4>
                  <p className="text-gray-700">Faça 1km Ritmo Leve + 10 x 400 metros de corrida ritmo <strong className="font-semibold">FORTE</strong>. Intervalo entre as séries: fique parado no lugar por até 1min30seg.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 2:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">MODERADO</strong> por 6km</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 3:</h4>
                  <p className="text-gray-700">Faça 5 séries: 1km Ritmo Leve x 200 metros Ritmo <strong className="font-semibold">MUITO FORTE</strong> x 200 metros Ritmo <strong className="font-semibold">MODERADO</strong></p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 4:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">LEVE</strong> por 9km</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Grupo 2</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 1:</h4>
                  <p className="text-gray-700">Faça 1km Ritmo Leve + 8 x 400 metros de corrida ritmo <strong className="font-semibold">MODERADO</strong>. Intervalo entre as séries: fique parado no lugar por até 3 minutos. Após as séries faça mais 1km Ritmo Leve</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 2:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">MODERADO</strong> por 6km</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 3:</h4>
                  <p className="text-gray-700">Faça 5 séries: 600 metros Ritmo <strong className="font-semibold">LEVE</strong> x 100 metros Ritmo <strong className="font-semibold">FORTE</strong> x 300 metros <strong className="font-semibold">MODERADO</strong></p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 4:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">LEVE</strong> por 8km.</p>
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

    if (week === 8) {
      return {
        id: `semana-${week}`,
        title: `Semana ${week}`,
        type: 'week' as const,
        isLoggable: true,
        content: (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              <span className="text-brand-blue">Plano 10km</span> - Semana 8
            </h2>
            <p className="text-lg font-semibold text-brand-blue mb-4">Parabéns! Você chegou na última semana!! 💪🤗</p>

            <div className="mb-8">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Grupo 1</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 1:</h4>
                  <p className="text-gray-700">Faça 1km Ritmo Leve + 10 x 400 metros de corrida ritmo <strong className="font-semibold">FORTE</strong>. Intervalo entre as séries: fique parado no lugar por até 1min30seg.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 2:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">MODERADO</strong> por 7km</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 3:</h4>
                  <p className="text-gray-700">Faça 4 séries: 1km Ritmo Leve x 300 metros Ritmo <strong className="font-semibold">FORTE</strong> x 200 metros Ritmo <strong className="font-semibold">MODERADO</strong></p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 4:</h4>
                  <p className="text-gray-700">Faça uma corrida por 10km. Ritmo <strong className="font-semibold">LIVRE</strong></p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Grupo 2</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 1:</h4>
                  <p className="text-gray-700">Faça 1km Ritmo Leve + 10 x 400 metros de corrida ritmo <strong className="font-semibold">MODERADO</strong>. Intervalo entre as séries: fique parado no lugar por até 2 minutos.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 2:</h4>
                  <p className="text-gray-700">Faça uma corrida contínua em ritmo <strong className="font-semibold">MODERADO</strong> por 8km</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 3:</h4>
                  <p className="text-gray-700">Faça 5 séries: 600 metros Ritmo <strong className="font-semibold">LEVE</strong> x 200 metros Ritmo <strong className="font-semibold">FORTE</strong> x 200 metros <strong className="font-semibold">MODERADO</strong></p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Treino 4:</h4>
                  <p className="text-gray-700">Faça uma corrida por 10km. Ritmo <strong className="font-semibold">LIVRE</strong></p>
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