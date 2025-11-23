import React, { useState, useEffect } from 'react';
import { CheckCircle, ShoppingBag } from 'lucide-react';

const maleNames = ['José', 'João', 'Antonio', 'Francisco', 'Carlos', 'Paulo', 'Pedro', 'Lucas', 'Luiz', 'Marcos', 'Luis', 'Gabriel', 'Rafael', 'Daniel', 'Marcelo', 'Bruno', 'Eduardo', 'Felipe', 'Rodrigo', 'Manoel', 'Mateus', 'André', 'Fernando', 'Fábio', 'Leonardo', 'Gustavo', 'Guilherme', 'Leandro', 'Tiago', 'Anderson', 'Ricardo', 'Márcio', 'Jorge', 'Alexandre', 'Roberto', 'Edson', 'Diego', 'Vitor', 'Sérgio', 'Cláudio', 'Matheus', 'Thiago', 'Geraldo', 'Adriano', 'Luciano', 'Julio', 'Renato', 'Alex', 'Vinicius', 'Rogério', 'Samuel', 'Ronaldo', 'Mario', 'Flavio', 'Douglas', 'Igor', 'Davi', 'Manuel', 'Jeferson', 'Cícero', 'Victor', 'Miguel', 'Robson', 'Mauricio', 'Danilo', 'Henrique', 'Caio', 'Reginaldo', 'Joaquim', 'Benedito', 'Gilberto', 'Marco', 'Alan', 'Nelson', 'Cristiano', 'Elias', 'Wilson', 'Valdir', 'Emerson', 'Luan', 'David', 'Renan', 'Severino', 'Fabrício', 'Mauro', 'Jonas', 'Gilmar', 'Jean', 'Fabiano', 'Wesley', 'Diogo', 'Adilson', 'Jair', 'Alessandro', 'Everton', 'Osvaldo', 'Gilson', 'Willian', 'Joel', 'Silvio', 'Hélio', 'Maicon', 'Reinaldo', 'Pablo', 'Artur', 'Vagner', 'Valter', 'Celso', 'Ivan', 'Cleiton', 'Vanderlei', 'Vicente', 'Arthur', 'Milton', 'Domingos','Wagner', 'Sandro', 'Moises', 'Edilson', 'Ademir', 'Adao', 'Evandro', 'Cesar', 'Valmir', 'Murilo', 'Juliano', 'Edvaldo', 'Ailton', 'Junior', 'Breno', 'Nicolas', 'Ruan', 'Alberto', 'Rubens', 'Nilton', 'Augusto', 'Cleber', 'Osmar', 'Nilson', 'Hugo', 'Otávio', 'Vinicios', 'Italo', 'Wilian', 'Alisson', 'Aparecido'];

const femaleNames = ['Maria', 'Ana', 'Francisca', 'Antonia', 'Adriana', 'Juliana', 'Márcia', 'Fernanda', 'Patrícia', 'Aline', 'Sandra', 'Camila', 'Amanda', 'Bruna', 'Jéssica', 'Leticia', 'Julia', 'Luciana', 'Vanessa', 'Mariana', 'Gabriela', 'Vera', 'Vitória', 'Larissa', 'Claudia', 'Beatriz', 'Rita', 'Luana', 'Sônia', 'Renata', 'Eliane'];

const actions = [
  'acabou de comprar',
  'encomendou',
  'adquiriu',
  'reservou'
];

const products = [
  'um Relógio Minimalista',
  'um Tênis Urban Runner',
  'uma Bolsa de Couro',
  'um Vestido Longo',
  'uma Bolsa Clutch',
  'Óculos de Sol Vintage',
  'uma Pasta Executiva',
  'Acessórios de Luxo'
];

const SocialProof: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState({ name: '', action: '', product: '' });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const showNotification = () => {
      // Logic from script: Randomize gender/name
      const isMale = Math.random() > 0.5;
      const nameList = isMale ? maleNames : femaleNames;
      const name = nameList[Math.floor(Math.random() * nameList.length)];
      
      // Select random product and action
      const product = products[Math.floor(Math.random() * products.length)];
      const action = actions[Math.floor(Math.random() * actions.length)];

      setMessage({ name, action, product });
      setIsVisible(true);

      // Hide after 4 seconds (as per script)
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);

      // Schedule next notification (Random between 4s and 20s as per script)
      // Math.floor(Math.random() * (max_time - min_time + 1) + min_time) * 1000
      const minTime = 4000;
      const maxTime = 20000;
      const nextDelay = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime);
      
      timeoutId = setTimeout(showNotification, nextDelay + 4000); // Wait for current to finish + delay
    };

    // Initial delay of 4 seconds
    timeoutId = setTimeout(showNotification, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-slide-in-left">
      <div className="bg-brand-card/95 border border-brand-primary/30 rounded-lg shadow-2xl p-4 flex items-center gap-4 max-w-sm backdrop-blur-md shadow-brand-primary/10">
        <div className="bg-green-500/10 p-2.5 rounded-full border border-green-500/20 shrink-0">
          <CheckCircle className="w-5 h-5 text-green-500" />
        </div>
        <div>
          <p className="text-sm text-white leading-snug">
            <span className="font-bold text-brand-primary">{message.name}</span> {message.action} <span className="font-medium text-gray-200">{message.product}</span>
          </p>
          <div className="flex items-center gap-1 mt-1">
            <ShoppingBag className="w-3 h-3 text-gray-500" />
            <span className="text-[10px] text-gray-400 font-medium">Verificado pela ModaFlex</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;