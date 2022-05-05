import { hot } from 'react-hot-loader/root'
import React, { FC } from 'react'

import Layout from './shared/Layout'
import Header from './shared/components/Header'
import Content from './shared/components/Content'
import CardsList from './shared/components/CardsList'

import './styles/normalize.global.css'
import './styles/main.global.css'

const AppComponent: FC = () => (
  <Layout>
    <Header />
    <Content>
      <CardsList />
    </Content>
  </Layout>
)

export const App = hot(() => <AppComponent />)
