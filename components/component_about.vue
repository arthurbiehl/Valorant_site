<template>
    <div class="about">
        <div class="container_about">
            <img src="../static/about.png" alt="">
            <div class="escrita_about">
                <h2>MÍDIA</h2>
                <p>Nosso trabalho, sua diversão. Não importa se você é jornalista, criador de conteúdo ou uma mistura
                    dos dois – tudo aqui é de uso livre. Fique à vontade para pegar e usar o que quiser!
                    Não se esqueça: se você criar algum conteúdo com esses arquivos, marque @PlayVALORANT e
                    @VALORANTBrasil nas redes sociais. Queremos ver o que você criou, mas lembre de seguir nosso
                    Lenga-lenga Jurídico!</p>
            </div>
        </div>
    </div>
</template>

<style>
.about {
    width: 100%;
    height: 400px;
    margin-top: 50px;
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.container_about {
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    color: #F20530;
}

.escrita_about {
    width: 650px;
    height: auto;

}

.container_about .escrita_about h2 {
    font-size: 40px;
}

.container_about .escrita_about p {
    width: 600px;
    font-size: 15px;
    font-weight: 500;
    color: rgb(145, 145, 145);
}

.container_about img {
    width: 500px;
    height: 500px;
}
</style>