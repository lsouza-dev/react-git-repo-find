import { useState } from "react";
import gitLogo from "../assets/github.png";
import Input from "../components/Input/index.js";
import Button from "../components/Button/index.js";
import ItemRepo from "../components/itemRepo/index.js";
import { Container } from "./styles.js";
import axios from "axios";
import { api } from "../services/api.js";

function App() {
  const [repos, setRepos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${inputValue}`);
    if (data.id) {
      const isExists = repos.find((r) => r.id === data.id);
      if (isExists) return alert("Repositório já adicionado.");

      setRepos((prev) => [...prev, data]);
      setInputValue("");
      return;
    } else alert("Repositório não encontrado.");
  };

  const handleRemoveRepo = (id) => {
    setRepos((prev) => prev.filter((repo) => repo.id !== id));
  };


  return (
    <div className="App">
      <Container>
        <img src={gitLogo} width={72} height={72} alt="Github logo" />
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={handleSearchRepo} />
        {repos.map((repo) => (
          <ItemRepo key={repo.id} repo={repo} removeRepo={handleRemoveRepo} />
        ))}
      </Container>
    </div>
  );
}

export default App;
