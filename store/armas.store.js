
import { defineStore } from 'pinia'

export const useTest = defineStore('armas', {

    state() {
        return {
            armas: [],
            arma: {},
            skins: [],
            persona: [],
            agent: {},
            modes: [],
            mapas: [],
            map: {}

        }
    },

    actions: {

        async getArmas() {
            this.armas = [];
            const response = await $fetch('https://valorant-api.com/v1/weapons', {
                method: 'GET',

            })


            this.armas = response.data;
        },

        async getArma(id) {
            this.arma = [];
            const response = await $fetch(`https://valorant-api.com/v1/weapons/${id}`, {
                method: 'GET',

            })


            this.arma = response.data;
        },


        async getSkins(id) {
            this.skins = [];
            const response = await $fetch(`https://valorant-api.com/v1/weapons/skins/${id}`, {
                method: 'GET',

            })


            this.skins = response.data;
        },

        async getPersona() {
            this.persona = [];
            const response = await $fetch('https://valorant-api.com/v1/agents', {
                method: 'GET',

            })


            this.persona = response;
        },

        async getAgent(id) {
            this.agent = {};
            const response = await $fetch(`https://valorant-api.com/v1/agents/${id}`, {
                method: 'GET',

            })


            this.agent = response.data;
        },

        async getModes() {
            this.modes = [];
            const response = await $fetch('https://valorant-api.com/v1/gamemodes', {
                method: 'GET',

            })


            this.modes = response;
        },
        async getMapas() {
            this.mapas = [];
            const response = await $fetch('https://valorant-api.com/v1/maps', {
                method: 'GET',

            })


            this.mapas = response;
        },

        async getMap(id) {
            this.map = {};
            const response = await $fetch(`https://valorant-api.com/v1/maps/${id}`, {
                method: 'GET',

            })


            this.map = response.data;
        },
        
    },

})