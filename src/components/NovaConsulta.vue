<template>
  <div class="pa-4 text-center">
    <v-dialog
      @click:outside="closeModal"
      v-model="dialog"
      max-width="600"
    >
      <v-card
        prepend-icon="mdi-account"
        :title="`Nova Consulta para `+ petSelected.name"
      >
        <v-card-text>
          <v-row dense>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
              density="compact"
                label="Nome do Pet"
                v-model="petSelected.name"
                disabled
              ></v-text-field>
            </v-col>

            <v-col
            cols="12"
            sm="6"
            >
            <v-text-field
            density="compact"
                label="Nome do Tutor"
                v-model="petSelected.tutor"
                disabled
              ></v-text-field>
            </v-col>

            <v-col
            cols="12"
            md="2"
            sm="6"
            >
            <v-text-field
            density="compact"
                label="Idade"
                v-model='petSelected.age'
                disabled
              ></v-text-field>
            </v-col>

            <v-col
            cols="12"
            md="4"
            sm="6"
            >
            <v-text-field
            density="compact"
                label="Raça"
                v-model="petSelected.raça"
                disabled
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-autocomplete
              density="compact"
                :items="['Bruno', 'Paulo', 'Maria', 'Pedro', 'Ana']"
                label="Vets"
                auto-select-first
              ></v-autocomplete>
            </v-col>
            <v-col
              md="3"
              cols="12"
              sm="6"
            >
              <v-autocomplete
              density="compact"
                :items="['1', '2', '3', '4', '5']"
                label="Prioridade"
                auto-select-first
              ></v-autocomplete>
            </v-col>

            <v-col
              md="3"
              cols="12"
              sm="6"
            >
              <v-autocomplete
              density="compact"
                :items="['Ração seca', 'Ração úmida', 'Alimentação natural']"
                label="Tipo de alimentação"
                auto-select-first
              ></v-autocomplete>
            </v-col>

          <v-col
              md="3"
              cols="12"
              sm="6"
            >
              <v-autocomplete
              density="compact"
                :items="['Sim', 'Não']"
                label="Castrado"
                auto-select-first
              ></v-autocomplete>
            </v-col>
          </v-row>
          
            <v-textarea no-resize clearable label="Motivo da consulta" variant="solo"></v-textarea>

        </v-card-text>


        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close"
            variant="plain"
            @click="closeModal"
          ></v-btn>

          <v-btn
            color="primary"
            text="Save"
            variant="tonal"
            @click="closeModal"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    name:'NovaConsulta',
    props:['consulta', 'pet'],

    data: () => ({
      dialog: false,
      petSelected:{
        name:'Lothar',
        tutor:'Felipe',
        age:8,
        raça:'Golden Retriver'
      }
    }),
    mounted(){
      this.dialog = this.$props.consulta
      this.petSelected = this.$props.pet
      console.log(this.petSelected)
    },
    methods:{
      closeModal(){
        // this.petSelected = {}
         this.$emit('closeModal', false);
      }
    }
  }
</script>