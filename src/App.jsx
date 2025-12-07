import './App.css';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';
import { Card } from './components/Card';

function App() {
    return (
        <>
            {/* Header */}
            <Header title="Welcome to My Website!" message="Thanks for visiting my site." />

            {/* Todo */}
            <TodoList todos={[
                { id: 1, text: "Finish reading a book before 2026", completed: false },
                { id: 2, text: "Finish one LinkedIn Learning course", completed: false },
                { id: 3, text: "Declutter bedroom closet", completed: true }
            ]} />

            {/* Card */}
            <Card
                title="My Card Title"
                subtitle="My Card Subtitle"
                content="This is the content of my card."
                image="https://placecats.com/neo_2/300/200"
            />

            {/* Footer */}
            <Footer message="contact me at contact@mywebsite.com" />
        </>
    );
}

export default App;