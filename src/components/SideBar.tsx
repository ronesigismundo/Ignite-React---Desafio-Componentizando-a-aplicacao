import {useEffect, useState} from 'react'

import { api } from '../services/api';
import { Button } from './Button';

import '../styles/sidebar.scss';

interface Genres {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: Genres[];
  onOpenContent: (id: number) => void;

  selectedGenre: number;
  
}

export function SideBar({onOpenContent, genres, selectedGenre}: SideBarProps ) {
  // Complete aqui
  
    
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onOpenContent(genre.id)}
            selected={selectedGenre === genre.id}
            />
          ))}
        </div>
    </nav>
  )
}