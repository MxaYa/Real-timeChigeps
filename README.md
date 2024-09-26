#ESCOPOS DE FUNCIONALIDADES DO SISTEMA DE CHAT
##PRIORIDADE ALTA
##INÍCIO DA CONVERSA: Assim que um chamado for aberto, o sistema iniciará uma conversa que será armazenada no banco de dados, garantindo que as informações estejam sempre acessíveis tanto para o cliente quanto para a equipe de triagem ou especialistas.

##INFORMAÇÕES DE ABERTURA DO CHAT: Antes da abertura do chat, as informações relacionadas à solicitação devem ser apresentadas ao usuário.

##VISIBILIDADE DAS INFORMAÇÕES: Ao abrir o chat, as informações sobre a solicitação devem ser visíveis apenas para a equipe de triagem.

##ADICÃO DE ESPECIALISTAS: O sistema deve permitir a adição de especialistas à conversa.

##HISTÓRICO PARA ESPECIALISTAS: Quando um especialista for adicionado à conversa, o histórico de interações anteriores deve estar disponível para ele.

##ARMAZENAMENTO DA CONVERSA: Ao fechar o chamado, o sistema deve armazenar no banco de dados toda a conversa realizada.

#PRIORIDADE MÉDIA
##ENVIO DE SCRIPT POR E-MAIL: Opcionalmente, o sistema deve oferecer a possibilidade de enviar todo o script da conversa por e-mail para a pessoa que abriu o chamado.

##OPÇÃO DE ENVIO DE CONVERSA AO FECHAR: No momento do fechamento do chat, deverá aparecer a opção de ter a conversa enviada para o e-mail.

##CRIAR UM GUIA DE AJUDA PARA A TRIAGEM: Desenvolver um guia para ajudar a equipe de triagem a entender o que cada comando faz.

#PRIORIDADE BAIXA
##POSSIBILITAR O ENVIO DE IMAGENS NA CONVERSA: O sistema deve permitir o envio de imagens durante a conversa.

#OCULTAR MENSAGENS DE COMANDO PARA O CLIENTE: Mensagens de comando não devem ser visíveis para o cliente.

##STATUS DE AGUARDANDO ATENDIMENTO: Assim que o chamado for aberto, ele deverá estar em status "aguardando", até que um membro da triagem acesse a conversa e inicie o atendimento.

#REPOSITÓRIO DE TESTE PARA O SISTEMA DO SIGEPS


Instalação de todas dependencia -> npm install axios@^1.7.7 firebase@^10.13.2 react@^18.3.1 react-dom@^18.3.1 react-router-dom@^6.26.2 sass@^1.79.3 socket.io-client@^4.7.5 uuid@^10.0.0
