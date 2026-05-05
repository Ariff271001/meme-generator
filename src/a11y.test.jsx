import { test, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe("App",()=>{

    test('ensures troll face image is accessible', () => {
        render(<App />)
        
        expect(screen.getByAltText("Troll face")).toBeInTheDocument();
    })
    
    test("check the meme image is accessible and has the alt set to One Does Not Simply",()=>{
        render(<App />)
        
        expect(screen.getByAltText("One Does Not Simply")).toBeInTheDocument()
    })
})