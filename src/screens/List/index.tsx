import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Wrapper, Container, ListContainer, TextVagas, EmptyContainer, EmptyText } from './styles'; // Importando os estilos
import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import VagaCard from '../../components/VagaCard';
import BottomMenu from '../../components/BottomMenu/BottomMenu';

const BASE_URL = 'http://26.161.237.227:3000'; // Substitua pela URL correta da sua API

export default function List() {
  const [vagas, setVagas] = useState([]);

  const fetchVagas = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/vagas`); // Caminho para o endpoint da API
      console.log(response.data);
      setVagas(response.data);
    } catch (error) {
      console.error("Erro ao buscar vagas: ", error);
    }
  };

  useEffect(() => {
    fetchVagas();
  }, []);

  return (
    <Wrapper>
      <Image source={BGTop} style={{ maxHeight: 86 }} />
      <Container>
        <Logo />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <TextVagas>{vagas.length} vagas encontradas!</TextVagas>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={fetchVagas}
          >
            <Text style={{ fontSize: 16, color: '#000' }}>🔄</Text>
          </TouchableOpacity>
        </View>
        <ListContainer>
          <FlatList
            data={vagas}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <VagaCard
                id={item.id}
                title={item.titulo}
                dataCreated={item.data_cadastro}
                company={item.empresa}
                status={item.status}
              />
            )}
            showsVerticalScrollIndicator={true}
            ListEmptyComponent={() => (
              <EmptyContainer>
                <EmptyText>Não há vagas disponíveis no momento.</EmptyText>
              </EmptyContainer>
            )}
          />
        </ListContainer>
      </Container>
      <BottomMenu />
    </Wrapper>
  );
}
