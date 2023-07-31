import React, { useState } from 'react';

const ConditionalContentFilter = () => {

  const [showContent, setShowContent] = useState(true);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <button onClick={toggleContent}>
        {showContent ? 'Ocultar Conteúdo' : 'Mostrar Conteúdo'}
      </button>

      {showContent && (
        <div>
          {/* Conteúdo a ser exibido quando showContent é verdadeiro */}
          <h2>Conteúdo Condicional</h2>
          <p>Este é um exemplo de conteúdo condicional exibido em React.</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalContentFilter;
