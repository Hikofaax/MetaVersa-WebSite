import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FAQManager = () => {
    const [faqs, setFaqs] = useState([]);
    const [newQuestion, setNewQuestion] = useState('');
    const [newAnswer, setNewAnswer] = useState('');

    useEffect(() => {
        fetchFaqs();
    }, []);

    const fetchFaqs = async () => {
        const res = await axios.get('http://api.yoursite.com/faqs');
        setFaqs(res.data);
    };

    const addFaq = async () => {
        if (newQuestion && newAnswer) {
            const res = await axios.post('http://api.yoursite.com/faqs', { question: newQuestion, answer: newAnswer });
            setFaqs([...faqs, res.data]);
            setNewQuestion('');
            setNewAnswer('');
        }
    };

    const deleteFaq = async (id) => {
        await axios.delete(`http://api.yoursite.com/faqs/${id}`);
        setFaqs(faqs.filter(faq => faq.id !== id));
    };

    return (
        <div className="p-4 bg-gray-800 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Gérer la FAQ</h2>
            <div className="flex space-x-4 mb-4">
                <input type="text" value={newQuestion} placeholder="Nouvelle question"
                    onChange={(e) => setNewQuestion(e.target.value)} className="input" />
                <input type="text" value={newAnswer} placeholder="Nouvelle réponse"
                    onChange={(e) => setNewAnswer(e.target.value)} className="input" />
                <button onClick={addFaq} className="btn-add">Ajouter</button>
            </div>
            <ul>
                {faqs.map((faq) => (
                    <li key={faq.id} className="faq-item">
                        <p className="text-lg">{faq.question}</p>
                        <p className="text-sm text-gray-400">{faq.answer}</p>
                        <button onClick={() => deleteFaq(faq.id)} className="btn-delete">Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQManager;
