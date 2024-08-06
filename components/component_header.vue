<template>

    <header>

        <div class="container_header">
            <img src="../static/Logo.png" alt="">

            <div class="links_header">
                <a href="/">INICIO</a>
                <a href="/armas">ARMAS</a>
                <a href="/modes">MODOS</a>
                <a href="/personagens">AGENTES</a>
                <a href="/mapas">MAPAS</a>

            </div>

            <div class="botao">
                <a href="">JOGUE AGORA!</a>
            </div>
        </div>

    </header>


</template>

<style>
header {
    width: 100%;
    height: 90px;
    background-color: #212121;
    display: flex;
    justify-content: center;
    align-items: center;
}



.container_header {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container_header img {
    width: 150px
}

.links_header {
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.links_header a {
    color: white;
    font-size: 16px;
    font-weight: 400;
}

.botao {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.botao a {
    width: 150px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: rgb(238, 238, 238);
    text-decoration: none;
    font-size: 14px;
    background-color: #F20530;
    transition: 0.5s;
}

.botao a:hover {
    background-color: #e6032d;
}
</style>