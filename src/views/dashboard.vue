<template>
  <v-app>
    <v-container grid-list-xs>
      <v-menu transition="scroll-x-transition"></v-menu>

      <!-- TODO: criar componente para dialogs -->

      <v-dialog v-model="openHistory">
        <v-card title="Historico Médico">
          <v-card-item>
            <v-row class="pa-4">
              <v-col cols="12" sm="3" md="3" lg="3" xl="2">
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-title>Vacinas</v-expansion-panel-title>
                    <v-expansion-panel-text> <v-data-table hide-default-footer hide-default-header
                        :items="selectPet.historicoMedico.vacinas"></v-data-table>
                      <v-divider></v-divider></v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
              <v-col cols="12" sm="3" md="3" lg="3" xl="2">
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-title>Doencas</v-expansion-panel-title>
                    <v-expansion-panel-text> <v-data-table hide-default-footer hide-default-header
                        :items="selectPet.historicoMedico.doencas"></v-data-table>
                      <v-divider></v-divider></v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
              <v-col cols="12" sm="3" md="3" lg="3" xl="2">
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-title>Cirurgias</v-expansion-panel-title>
                    <v-expansion-panel-text> <v-data-table hide-default-footer hide-default-header
                        :items="selectPet.historicoMedico.cirurgias"></v-data-table>
                      <v-divider></v-divider></v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>

            <v-row class="pa-4">
              <v-col cols="12" sm="3" md="3" lg="3" xl="2">
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-title>Alergias</v-expansion-panel-title>
                    <v-expansion-panel-text> <v-data-table hide-default-footer hide-default-header
                        :items="selectPet.historicoMedico.alergias"></v-data-table>
                      <v-divider></v-divider></v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
              <v-col cols="12" sm="3" md="3" lg="4" xl="3">
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-title>Medicamentos Diarios</v-expansion-panel-title>
                    <v-expansion-panel-text> <v-data-table hide-default-footer hide-default-header
                        :items="selectPet.historicoMedico.medicamentos"></v-data-table>
                      <v-divider></v-divider></v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>


          </v-card-item>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="Fechar" @click="openHistory = false"></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>



      <v-row>
        <v-col cols="12" sm="2" md="2" lg="2" xl="1" class="pt-5 mt-5"></v-col>
        <v-col cols="12" sm="6" md="4" lg="3" xl="2" class="pt-5 mt-5">
          <v-card variant="flat">
            <v-card-title class="pa-2 pl-4">Tutor</v-card-title>
            <v-form @submit.prevent="findUser(document)">
              <v-text-field v-model="document" density="compact" placeholder="CPF"
                prepend-inner-icon="mdi-text-box-search-outline" variant="outlined"
                @click:append-inner="findUser(document)"></v-text-field>
            </v-form>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="3" md="3" lg="2" xl="2">
          <v-expand-transition>
            <v-list v-if='cardOpen'>
              <v-list-item prepend-icon="mdi-account-circle" :title="user.Name"></v-list-item>
              <v-list-group value="Pets">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" prepend-icon="mdi-paw" title="Pets"></v-list-item>
                </template>
                <div v-for="pet of Pets" :key="pet.id">
                  <v-list-item @click="DescripPet(pet)" :key="pet.name + pet.id" v-bind="props" :title="pet.name"
                    :value="pet.name"></v-list-item>
                </div>
              </v-list-group>
              <v-list :items="[{
                title: 'Novo Pet',
                value: 1,
                props: {
                  prependIcon: 'mdi-home',
                },
              }]"></v-list>
            </v-list>
          </v-expand-transition>
        </v-col>

        <v-col>
          <v-expand-transition>
            <v-card v-if="selectPet" variant="flat" class="pa-4">
              <v-row>
                <v-col cols="3" sm="3" md="2" class="ma-0">
                  <v-card variant="flat" class="pb-2 ">
                    <v-card-title class="pa-2 pl-4">Nome</v-card-title>
                    <v-divider></v-divider>
                    <v-card-item class="pa-3 pb-1 pl-5">{{ selectPet.name }}</v-card-item>
                    <v-divider></v-divider>

                  </v-card>
                </v-col>
                <v-col cols="3" sm="3" md="1" class="ma-0">
                  <v-card variant="flat" class="pb-2">
                    <v-card-title class="pa-2 pl-4">Idade</v-card-title>
                    <v-divider></v-divider>
                    <v-card-item class="pa-3 pb-1 pl-5">{{ selectPet.age }}</v-card-item>
                    <v-divider></v-divider>

                  </v-card>
                </v-col>
                <v-col cols="3" sm="3" md="2" class="ma-0">
                  <v-card variant="flat" class="pb-2">
                    <v-card-title class="pa-2 pl-4">Especie</v-card-title>
                    <v-divider></v-divider>
                    <v-card-item class="pa-3 pb-1 pl-5">{{ selectPet.especie }}</v-card-item>
                    <v-divider></v-divider>

                  </v-card>
                </v-col>
                <v-col cols="3" sm="3" md="3" class="ma-0">
                  <v-card variant="flat" class="pb-2">
                    <v-card-title class="pa-2 pl-4">Raça</v-card-title>
                    <v-divider></v-divider>
                    <v-card-item class="pa-3 pb-1 pl-5">{{ selectPet.raça }}</v-card-item>
                    <v-divider></v-divider>

                  </v-card>
                </v-col>

              </v-row>
              <v-row>
                <v-col cols="3" sm="3" md="2" class="ma-0">
                  <v-card variant="flat" class="pb-2 ">
                    <v-card-actions>
                      <v-btn @click="historyOpen">Historico Médico</v-btn>
                    </v-card-actions>
                    <v-divider></v-divider>

                  </v-card>
                </v-col>

              </v-row>
            </v-card>
          </v-expand-transition>
        </v-col>


      </v-row>

      <div v-if="consulta">
        <NovaConsultaVue @closeModal="close" :consulta="consulta" :pet="selectPet" />
      </div>
    </v-container>


  </v-app>
</template>

<script>
import axios from 'axios';
import NovaConsultaVue from '../components/NovaConsulta.vue';

export default {
  components:  {NovaConsultaVue} ,
  name: "Dashboard",
  data() {
    return {
      openHistory:false,
      consulta:false,
      selectPet:null,
      document: '',
      cardOpen:false,
      user:{},
      open: [],
      Pets: [
        {
          "id": 1,
          "name": "Lothar",
          "tutor": "Felipe",
          "especie": "Cachorro",
          "sexo": "Macho",
          "age": 8,
          "raça": "Golden Retriever",
          "historicoVacina": [
            {
              "id": 1,
              "nome": "Raiva",
              "data": "20/02/2022"
            },
            {
              "id": 2,
              "nome": "V8",
              "data": "20/02/2022"
            }
          ],
          "historicoMedico": {
            "vacinas": [
              {
                "nome": "Raiva",
                "data": "20/02/2022"
              },
              {
                "nome": "V8",
                "data": "20/02/2022"
              }
            ],
            "doencas": [
              {
                "nome": "Dermatite",
                "data": "15/08/2021"
              }
            ],
            "cirurgias": [
              {
                "nome": "Castracao",
                "data": "10/06/2018"
              }
            ],
            "alergias": [{
              'nome': "Poeira"
            }
             
            ],
            "medicamentos": [
              {
                "nome": "Antialérgico",
                "dosagem": "1 comprimido ao dia"
              }
            ]
          },
          "dieta": {
            "tipoAlimentacao": "Ração seca",
            "frequencia": "2 vezes ao dia",
            "quantidade": "300g por refeição",
            "suplementos": [
              "Ômega 3"
            ]
          },
          "comportamentoHabitos": {
            "nivelAtividade": "Alto",
            "mudancasComportamento": "Nenhuma",
            "padroesSono": "8 horas por noite",
            "preferenciasAlimentares": "Prefere frango, não gosta de peixe"
          },
          "reproducao": {
            "estadoReprodutivo": "Castrado",
            "historicoGravidezes": "Não aplicável",
            "cicloCio": "Não aplicável"
          },
          "ambiente": {
            "tipoAmbiente": "Externo",
            "contatoComOutrosAnimais": "Sim, outros cães",
            "condicoesHigieneConforto": "Boas"
          }
        },
        {
          "id": 2,
          "name": "Amora",
          "tutor": "Felipe",
          "especie": "Cachorro",
          "sexo": "Fêmea",
          "age": 3,
          "raça": "Bernese mountain",
          "historicoVacina": [
            {
              "id": 1,
              "nome": "Raiva",
              "data": "15/03/2022"
            },
            {
              "id": 2,
              "nome": "V4",
              "data": "15/03/2022"
            }
          ],
          "historicoMedico": {
            "vacinas": [
              {
                "nome": "Raiva",
                "data": "15/03/2022"
              },
              {
                "nome": "V4",
                "data": "15/03/2022"
              }
            ],
            "doencas": [
              {
                "nome": "Infecção urinária",
                "data": "10/12/2021"
              }
            ],
            "cirurgias": [
              {
                "nome": "Esterilização",
                "data": "05/01/2021"
              }
            ],
            "alergias": [
              "Peixe"
            ],
            "medicamentos": [
              {
                "nome": "Antibiótico",
                "dosagem": "2 vezes ao dia por 7 dias"
              }
            ]
          },
          "dieta": {
            "tipoAlimentacao": "Ração úmida",
            "frequencia": "3 vezes ao dia",
            "quantidade": "100g por refeição",
            "suplementos": [
              "Vitaminas B"
            ]
          },
          "comportamentoHabitos": {
            "nivelAtividade": "Médio",
            "mudancasComportamento": "Mais quieta recentemente",
            "padroesSono": "12 horas por dia",
            "preferenciasAlimentares": "Prefere frango, não gosta de peixe"
          },
          "reproducao": {
            "estadoReprodutivo": "Esterilizada",
            "historicoGravidezes": "Não aplicável",
            "cicloCio": "Não aplicável"
          },
          "ambiente": {
            "tipoAmbiente": "Interno",
            "contatoComOutrosAnimais": "Não",
            "condicoesHigieneConforto": "Excelentes"
          }
        },
        {
          "id": 3,
          "name": "Durotan",
          "tutor": "Felipe",
          "sexo": "Macho",
          "especie": "Cachorro",
          "age": 5,
          "raça": "SRD",
          "historicoVacina": [
            {
              "id": 1,
              "nome": "Raiva",
              "data": "10/05/2021"
            },
            {
              "id": 2,
              "nome": "V8",
              "data": "10/05/2021"
            },
            {
              "id": 3,
              "nome": "Giárdia",
              "data": "10/05/2021"
            }
          ],
          "historicoMedico": {
            "vacinas": [
              {
                "nome": "Raiva",
                "data": "10/05/2021"
              },
              {
                "nome": "V8",
                "data": "10/05/2021"
              },
              {
                "nome": "Giárdia",
                "data": "10/05/2021"
              }
            ],
            "doencas": [
              {
                "nome": "Otite",
                "data": "20/07/2021"
              }
            ],
            "cirurgias": [
              {
                "nome": "Correção de displasia",
                "data": "15/06/2022"
              }
            ],
            "alergias": [
              "Pulgas"
            ],
            "medicamentos": [
              {
                "nome": "Antibiótico",
                "dosagem": "1 vez ao dia por 10 dias"
              }
            ]
          },
          "dieta": {
            "tipoAlimentacao": "Ração seca",
            "frequencia": "2 vezes ao dia",
            "quantidade": "400g por refeição",
            "suplementos": [
              "Condroitina"
            ]
          },
          "comportamentoHabitos": {
            "nivelAtividade": "Alto",
            "mudancasComportamento": "Nenhuma",
            "padroesSono": "8 horas por noite",
            "preferenciasAlimentares": "Prefere carne, não gosta de vegetais"
          },
          "reproducao": {
            "estadoReprodutivo": "Inteiro",
            "historicoGravidezes": "Não aplicável",
            "cicloCio": "Não aplicável"
          },
          "ambiente": {
            "tipoAmbiente": "Misto",
            "contatoComOutrosAnimais": "Sim, gatos e cães",
            "condicoesHigieneConforto": "Boas"
          }
        },
        {
          "id": 4,
          "name": "Fedelha",
          "tutor": "Felipe",
          "sexo": "Femea",
          "especie": "Cachorro",
          "age": 2,
          "raça": "American Bully",
          "historicoVacina": [
            {
              "id": 1,
              "nome": "Raiva",
              "data": "12/08/2022"
            },
            {
              "id": 2,
              "nome": "V10",
              "data": "12/08/2022"
            }
          ],
          "historicoMedico": {
            "vacinas": [
              {
                "nome": "Raiva",
                "data": "12/08/2022"
              },
              {
                "nome": "V10",
                "data": "12/08/2022"
              }
            ],
            "doencas": [
              {
                "nome": "Gastroenterite",
                "data": "25/04/2023"
              }
            ],
            "cirurgias": [
              {
                "nome": "Nenhuma",
                "data": "Não aplicável"
              }
            ],
            "alergias": [
              "Poeira"
            ],
            "medicamentos": [
              {
                "nome": "Probiótico",
                "dosagem": "1 vez ao dia por 5 dias"
              }
            ]
          },
          "dieta": {
            "tipoAlimentacao": "Ração seca",
            "frequencia": "3 vezes ao dia",
            "quantidade": "250g por refeição",
            "suplementos": [
              "Vitaminas C"
            ]
          },
          "comportamentoHabitos": {
            "nivelAtividade": "Médio",
            "mudancasComportamento": "Mais agitado ultimamente",
            "padroesSono": "10 horas por dia",
            "preferenciasAlimentares": "Prefere carne, não gosta de frango"
          },
          "reproducao": {
            "estadoReprodutivo": "Inteiro",
            "historicoGravidezes": "Não aplicável",
            "cicloCio": "Não aplicável"
          },
          "ambiente": {
            "tipoAmbiente": "Interno",
            "contatoComOutrosAnimais": "Não",
            "condicoesHigieneConforto": "Excelentes"
          }
        }
      ],
    };
  },
  methods: {
    historyOpen(){
      this.openHistory = true
    },
    DescripPet(pet){
      this.selectPet = pet
    },
    close(evento){
      this.consulta = evento
    },
    novaconsulta(){
      this.consulta = !this.consulta
    },
    async findUser(user) {
      this.cardOpen = false
      try {
        const res = await axios.post("http://localhost:3000/clinic/find-user", { cpf: user });
        this.user = res.data.data
        this.cardOpen = true
      } catch (error) {
        console.error("🚀 ~ findUser ~ error:", error);
      }
    }
  }
};
</script>
