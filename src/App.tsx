import ShellBar from "./components/layout/ShellBar";
import React from 'react';
import { Layout } from './styles';
import AppContainer from "./components/layout/AppContainer";
import SideNav from "./components/layout/SideNav";

function App() {
  return (
    <Layout>
      <ShellBar />

      <SideNav />

      <AppContainer />
    </Layout>
  );
}

export default App;
