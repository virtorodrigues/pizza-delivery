import {
  useState,
  createContext,
  useEffect,
  ReactNode,
} from 'react';

import api from '../services/api';

type UserScoreType = {
  score: number;
};

type UserScoreContextType = {
  userScore: UserScoreType;
  updateScore: (newScore: number) => void;
};

type StepsContextProviderType = {
  children: ReactNode;
};

export const UserScoreContext = createContext({} as UserScoreContextType);

export function UserScoreProvider(props: StepsContextProviderType) {
  const [userScore, setUserScore] = useState({} as UserScoreType);

  useEffect(() => {
    async function loadUserScore(): Promise<void> {
      const response = await api.get('/userScore');
      setUserScore(response.data);
    }
    loadUserScore();
  }, []);

  async function updateScore(newScore: number): Promise<void> {
    const response = await api.put(`/userScore`, {
      score: userScore.score + newScore
    });
    setUserScore(response.data);
  }

  return (
    <UserScoreContext.Provider value={{ userScore, updateScore }}>
      {props.children}
    </UserScoreContext.Provider>
  )
}
