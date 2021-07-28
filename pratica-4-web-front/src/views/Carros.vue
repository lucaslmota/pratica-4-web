<template>
<div>


  <div class="campos">
    <h4>Cadastrar Carros</h4>

           <p> Id: <input type="text" v-model="id" /><br /></p> 
           <p> Nome: <input type="text" v-model="nome" /><br /></p> 
           <p> Marca: <input type="text" v-model="marca" /><br /></p>
           <p> Ano de Fabricação: <input type="text" v-model="anoFabricacao" /><br /></p>
           <p> Ano do modelo: <input type="text" v-model="anoModel" /><br /><br></p>
           <p> Data de Venda: <input type="text" v-model="dataVenda" /><br /><br></p>
   </div>

  <div class="butaos">
    <button @click="PostCarro()">Post Carro</button><br /><br />
    <button @click="PutCarro()">Put Carro</button><br /><br />
    <button @click="DeleteCarro()">Delete Carro</button><br /><br /> 
  </div>

   <ul>
      <li>
        <div class="infor">
          <p> Id: {{ carros.id }}</p>
          <p>Nome: {{ carros.nome }}</p>
          <p>Marca: {{ carros.marca }}</p>
          <p>Ano de Fabricação: {{ carros.anoFabricacao }}</p>
          <p>Ano de Modelo: {{ carros.anoModel }}</p>
          <p>Data de Venda: {{ carros.dataVenda }}</p>
        </div>
      </li>
    </ul>


</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      id: 0,
      nome: "",
      marca: "",
      anoFabricacao:"",
      anoModel:"",
      dataVenda:"",
      carros: [],
      baseURI: "http://localhost:3000/carros"
    }
  },
  
  methods: {
    PostCarro(){
      let obj ={
        nome: this.nome,
        marca: this.marca,
        anoFabricacao: this.anoFabricacao,
        anoModel: this.anoModel,
        dataVenda: this.dataVenda,
      };

      axios.post(this.baseURI, obj).then((resul) =>{
        this.carros = resul.data
      })
    },

    PutCarro(){
      let obj ={

        nome: this.nome,
        marca: this.marca,
        anoFabricacao: this.anoFabricacao,
        anoModel: this.anoModel,
        dataVenda: this.dataVenda,
      };

      axios.put(this.baseURI+"/" + this.id, obj).then((result) =>{
        console.log(result)
      })
    },

    DeleteCarro(){
      axios.delete(this.baseURI +"/"+this.id,).then((result) =>{})
    }
  },
}
</script>

<style>

.Campos {
    margin: auto;
    font-weight: 600;
    width: 40%;
        
}
.butaos{
    display: flex;
    width: 70%;
    justify-content: center;
    margin: 10px auto;
  
}
.butaos button{
    background-color: rgb(23, 91, 192);
    color: white;
    margin: 0 20px;
    cursor: pointer;
}
.infor {
    display: flex;
}
.infor p {
    margin: 10px 10px;
    
}


</style>