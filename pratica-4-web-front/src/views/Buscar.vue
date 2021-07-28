<template>
 <div class="campos">

          <h4>Mostrar todos os Carros</h4>
            <button @click="TodosCarros()">Todos os carros</button><br /><br />
                <ul>
                    <li v-for="carro in todosCarros " :key="carro.id">
                        <div class="infor">
                        <p> Id: {{ carro.id }}</p>
                        <p>Nome: {{ carro.nome }}</p>
                        <p>Marca: {{ carro.marca }}</p>
                        <p>Ano de Fabricação: {{ carro.anoFabricacao }}</p>
                        <p>Ano de Modelo: {{ carro.anoModelo }}</p>
                        <p>Data de Venda: {{ carro.dataVenda }}</p>
                        </div>
                    </li>
                </ul>

        <h4>Filtrar carros por Id</h4>
        <p>Id: <input type="text" v-model="id"></p>
          <button @click="BuscarCarroId()">Carros por Id</button><br /><br />

          <ul>
            <li>
                <div class="infor">
                <p> Id: {{ carrosId.id }}</p>
                <p>Nome: {{ carrosId.nome }}</p>
                <p>Marca: {{ carrosId.marca }}</p>
                <p>Ano de Fabricação: {{ carrosId.anoFabricacao }}</p>
                <p>Ano de Modelo: {{ carrosId.anoModelo }}</p>
                <p>Data de Venda: {{ carrosId.dataVenda }}</p>
                </div>
            </li>
        </ul>

        <h4>Filtrar pela marca do carro</h4>
             <p> Marca: <input type="text" v-model="marca" /><br /></p>
             <button @click="BuscarCarroMarca()">Buscar carro pela marca</button><br /><br />

                <ul>  
                    <li  v-for="carro in carroMarca " :key="carro.id" >
                        <div class="infor">
                            <p> Id: {{ carro.id }}</p>
                            <p>Nome: {{ carro.nome }}</p>
                            <p>Marca: {{ carro.marca }}</p>
                            <p>Ano de Fabricação: {{ carro.anoFabricacao }}</p>
                            <p>Ano de Modelo: {{ carro.anoModelo }}</p>
                            <p>Data de Venda: {{ carro.dataVenda }}</p>
                        </div>
                    </li>
                </ul>
        
        <h4>Filtrar por quantidade de Carros</h4>
            Quantidade: <input type="text" v-model="qtd" /><br /><br /><br>
             <button @click="BuscarCarroQuant()">Buscar por qtd de carros</button><br /><br />

              <ul>
                    <li  v-for="carro in carroQtd " :key="carro.id" >
                        <div class="infor">
                            <p> Id: {{ carro.id }}</p>
                            <p>Nome: {{ carro.nome }}</p>
                            <p>Marca: {{ carro.marca }}</p>
                            <p>Ano de Fabricação: {{ carro.anoFabricacao }}</p>
                            <p>Ano de Modelo: {{ carro.anoModelo }}</p>
                            <p>Data de Venda: {{ carro.dataVenda }}</p>
                        </div>
                    </li>
               </ul>

        </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            id: 0,
            nome: "",
            marca: "",
            anoFabricacao:"",
            anoModelo:"",
            dataVenda:"",
            qtd:0,
            todosCarros: [],
            carrosId:[],
            carroMarca:[],
            carroQtd:[],
            baseURI:"http://localhost:3000/carros"
        }
    },

    methods: {
        TodosCarros(){
            axios.get(this.baseURI).then((result) =>{
                this.todosCarros = result.data
            })
        },

        BuscarCarroId(){
            axios.get(this.baseURI + "/" + this.id).then((result) =>{
                this.carrosId = result.data
            })
            .catch(function(error) {
            console.log(error);
            })
        },

        BuscarCarroMarca(){
            axios.get(this.baseURI + "/search?marca=" + this.marca).then((result) =>{
                this.carroMarca = result.data
            })
            .catch(function(error) {
            console.log(error);
            })
        },

        BuscarCarroQuant(){
            axios.get(this.baseURI + "/" + this.qtd).then((result) =>{
                this.carroQtd = result.data
            })
            .catch(function(error) {
            console.log(error);
            })
        }
    },
}
</script>

<style>
.Campos {
    margin: auto;
    width: 80%;
        
}
button{
    background-color: rgb(23, 91, 192);
    color: white;
    margin: 0 20px;
    height: 30px;
    cursor: pointer;
}
.infor {
    display: flex;
   
}
.infor p {
    margin: 10px 10px;
    
    
}
</style>