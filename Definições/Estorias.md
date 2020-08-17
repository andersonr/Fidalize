# Estórias

**Objetivo**

Como consumidor, eu quero agrupar os pontos de todos estabelecimentos em um só lugar. Para não ser necessário guardar papéis/imãs/vouchers sempre que algum estabelecimento me fornecer isto. 

## CONSUMIDOR

---

Como consumidor, eu quero ver a quantidade de tickets faltantes para completar uma campanha. Para que eu possa escolher o estabelecimento que está mais próximo de concluir.

Solução: Tela inicial do consumidor deverá exibir uma lista com todas as campanhas que eles está participando, inclusive o status de conclusão da campanha.

---

Como consumidor, eu quero ver informações do estabelecimento, como por exemplo, nome, endereço, dados de contato, as campanhas disponíveis e a quantidade de pontos. 

Solução: Ter uma tela que exiba as informações dos estabelecimentos que são responsáveis pelas campanhas. Também deverá ter um disclaimer informando que o estabelecimento é o responsável pela campanha e deverá deixar visível um telefone de contato do responsável da empresa.

---

Como consumidor, eu quero me cadastrar de forma fácil, sem precisar informar muitos dados. Para isso, solicitar nome, cpf, email, Numero de celular e senha para fazer o cadastro. Autenticação com Facebook ou Google.

Solução:  Tela de cadastro para consumidor bem simples e intuitiva e que permita integração com outros serviços oauth.

O primeiro cadastro do usuário sempre será como consumidor. Ele poderá virar Fornecedor também, porém dai será necessário um cadastro mais detalhado e completo da empresa. Como CNPJ, Razão Social, Nome Fantasia, Ramo de atividade e o usuário que está cadastrando a empresa será um dos responsáveis pela empresa no App. A partir desse momento, será possível informar que outros usuários também são responsáveis pela conta da empresa e a função de cada um.

Tendo dados de contato, confirmação de inscrição e tornando o estabelecimento responsável pela campanha. Aonde nós somos apenas a plataforma utilizada, mas todas as campanhas são de responsabilidade do estabelecimento.

---

Como consumidor, quero ter um histórico de consumo, para saber quando eu troquei os pontos com cada fornecedor e quanto economizei

Solução: Armazenar a lista de operações que aconteceram, para o fornecedor e o cliente conseguirem acompanhar. Ex: 

08/08/2020 - Resgatou o prêmio '1 almoço grátis'

07/08/2020 - Ganhou 1 ponto

06/08/2020 - Ganhou 1 ponto

Gameficar o ato de completar a campanha, dando "recompensas" para o usuário ou objetivos para que ele atenda.

---

Como consumidor, eu quero escolher quando vou trocar o prêmio, para trocar apenas quando for de meu interesse. Antes do prazo de validade da campanha.

Solução: Consumidor sinaliza quando deseja trocar os pontos e recebe um código/QrCode de troca no próprio App.

Ele poderá apresentar o QRCode gerado para que o estabelecimento valide ou basta informar o código para o estabelecimento

---

Como consumidor eu quero ver as campanhas que estão acontecendo perto de mim. Com informações bem claras e simples sobre as campanhas.

Solução: Ter uma tela estilo "explorar", aonde buscaremos estabelecimentos próximos que tenham campanhas acontecendo.

---

Como consumidor, eu quero poder dar um feedback do que achei da campanha e também poder ter uma comunicação direta com o estabelecimento.

Solução: Permitir que os consumidores avaliem as campanhas com até 5 estrelas(Bem simples) e que seja possível eles enviarem uma mensagem do que acham ou da experiência que tiveram no estabelecimento.

Permitir que o estabelecimento possa responder essa mensagem

---

## Fornecedor

---

Como fornecedor, eu quero poder incluir um participante através de algum dado do consumidor. Para que seja rápido e simples.

Solução: Fornecedor poderá adicionar um participante a campanha através do cpf ou telefone.

---

Como fornecedor, eu quero ter dados a respeito dos meus clientes, status das campanhas, projeção futura de gastos e de realização da campanha, para ter como estimar o custo que terei. 

Solução:

Criar uma tela dashboard, visão fornecedor que somente deverá ficar visível para o usuário responsável pelo estabelecimento e quem ele quiser dar acesso:

- Gráficos e estatísticas de uso dos consumidores
- Informação de média de dias entre cada pontuação do cliente, para estimar quando será o resgate do premio.

---

Como fornecedor, eu quero garantir que quem está trocando os pontos é o próprio consumidor, para evitar fraudes.

Solução: Consumidor precisa informar o código obtido ao solicitar a troca dos pontos. 

---

Como fornecedor, eu quero poder informar que o cliente fez a troca dos pontos pelo produto/serviço proposto.

Solução: Ao realizar a "troca"(Concluir a campanha), a mesma será "zerada" na visão do consumidor e o consumidor receberá um aviso e uma medalha.

---

Como administrador do fornecedor eu quero poder selecionar quais usuários fazem parte da equipe e podem cadastrar participantes. Também quer poder revogar essa permissão.

## Comum

---

Como usuário, eu quero acessar de forma fácil o aplicativo, sem precisar ficar lembrando qual usuário utilizei, para isso o login deve ser feito baseado no CPF ou e-mail e uma senha. A autenticação deve ser persistida.

---

Como usuário quero ter a possibilidade de recuperar uma senha perdida

---