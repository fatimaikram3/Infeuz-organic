import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';

const quizData = {
    questions: [
        {
            id: 1,
            text: "How does your skin feel midday?",
            options: [
                { text: "Shiny and oily all over", type: "oily", points: 2 },
                { text: "Tight and flaky", type: "dry", points: 2 },
                { text: "Oily in the T-zone, dry elsewhere", type: "combination", points: 2 },
                { text: "Comfortable and balanced", type: "normal", points: 2 }
            ]
        },
        {
            id: 2,
            text: "How often do you experience breakouts?",
            options: [
                { text: "Frequently", type: "oily", points: 1 },
                { text: "Occasionally, mostly hormonal", type: "combination", points: 1 },
                { text: "Rarely", type: "normal", points: 1 },
                { text: "My skin is more reactive/red than breakout-prone", type: "sensitive", points: 2 }
            ]
        },
        {
            id: 3,
            text: "How does your skin react to new products?",
            options: [
                { text: "Rarely has any reaction", type: "normal", points: 1 },
                { text: "Can get slightly oily or dry", type: "combination", points: 1 },
                { text: "Often feels itchy or turns red", type: "sensitive", points: 2 },
                { text: "Needs heavy moisture to feel okay", type: "dry", points: 1 }
            ]
        },
        {
            id: 4,
            text: "What is your primary skin concern?",
            options: [
                { text: "Excess oil and enlarged pores", type: "oily", points: 2 },
                { text: "Dullness and fine lines", type: "dry", points: 2 },
                { text: "Redness and irritation", type: "sensitive", points: 2 },
                { text: "Uneven texture", type: "combination", points: 2 }
            ]
        }
    ],
    productRecommendations: {
        oily: [104, 12, 7, 303],
        dry: [2, 5, 118, 102],
        combination: [1, 8, 9, 11],
        sensitive: [102, 5, 202, 4],
        normal: [106, 7, 5, 201]
    }
};

const Assessment = () => {
    const [currentStep, setCurrentStep] = useState(-1);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [email, setEmail] = useState('');
    const [results, setResults] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const { addToCart, setIsCartOpen, products } = useShop();

    const handleStart = () => {
        setCurrentStep(0);
    };

    const handleOptionSelect = (optionIdx) => {
        const newOptions = [...selectedOptions];
        newOptions[currentStep] = optionIdx;
        setSelectedOptions(newOptions);
        
        if (currentStep < quizData.questions.length - 1) {
            // we don't auto-advance anymore, we wait for the user to click next
            // but we can still show selection state
        }
    };

    const handleNext = () => {
        if (selectedOptions[currentStep] === undefined) {
            alert("Please select an option to continue.");
            return;
        }
        if (currentStep < quizData.questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setCurrentStep(quizData.questions.length); // go to email step
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        } else {
            setCurrentStep(-1);
            setSelectedOptions([]);
        }
    };

    const handleUnlockResults = (e) => {
        e.preventDefault();
        if (email && email.includes('@')) {
            setIsAnalyzing(true);
            calculateResults();
        } else {
            alert("Please enter a valid email.");
        }
    };

    const calculateResults = () => {
        let scores = { oily: 0, dry: 0, combination: 0, sensitive: 0, normal: 0 };
        selectedOptions.forEach((optIdx, qIdx) => {
            const opt = quizData.questions[qIdx].options[optIdx];
            scores[opt.type] += opt.points;
        });

        let mainType = 'normal';
        let maxScore = -1;
        for (const type in scores) {
            if (scores[type] > maxScore) {
                maxScore = scores[type];
                mainType = type;
            }
        }

        setTimeout(() => {
            setIsAnalyzing(false);
            setResults(mainType);
        }, 2500); // Wait 2.5 seconds to show scanning animation
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        setIsCartOpen(true);
    };

    const renderContent = () => {
        if (results) {
            const recommendedProductIds = quizData.productRecommendations[results];
            const recommendedProducts = products.filter(p => recommendedProductIds.includes(p.id));
            
            return (
                <div className="text-center stq-fade-in">
                    <span className="inline-block px-6 py-2 rounded-full font-bold uppercase tracking-widest text-white mb-6 shadow-md" style={{ background: 'var(--accent-gold)' }}>
                        {results} SKIN
                    </span>
                    <p className="mb-8 text-lg" style={{ color: 'var(--dark-text)' }}>Your <strong>Infeuz Organic</strong> profile is ready. For your {results} skin, we recommend:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {recommendedProducts.map((p) => (
                            <div key={p.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <div className="h-48 mb-4 overflow-hidden rounded-xl flex items-center justify-center bg-gray-50 relative">
                                    <img src={p.img} alt={p.name} className="max-h-full max-w-full object-cover transition-transform duration-500 hover:scale-110" />
                                    {p.tag && <span className="absolute top-3 right-3 bg-white text-xs font-bold px-2 py-1 rounded shadow-sm" style={{ color: '#d81b60' }}>{p.tag}</span>}
                                </div>
                                <h4 className="font-bold text-lg mb-2" style={{ color: 'var(--dark-text)' }}>{p.name}</h4>
                                <p className="mb-4 text-gray-600">${p.price}.00</p>
                                <button 
                                    onClick={() => handleAddToCart(p)}
                                    className="w-full py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all shadow-md hover:shadow-lg"
                                    style={{ background: 'var(--accent-gold)', color: 'white' }}
                                >
                                    Add to Bag
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    <button 
                        onClick={() => { setCurrentStep(-1); setSelectedOptions([]); setResults(null); setEmail(''); }}
                        className="mt-12 py-3 px-8 rounded-full border border-gray-300 uppercase tracking-wider text-sm hover:bg-gray-50 transition-colors"
                        style={{ color: 'var(--dark-text)' }}
                    >
                        Retake Assessment
                    </button>
                </div>
            );
        }

        if (isAnalyzing) {
            return (
                <div className="text-center py-10 stq-fade-in">
                    <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--accent-gold)' }}>Analyzing Your Profile</h3>
                    <div className="w-full h-1 relative overflow-hidden rounded-full mb-8" style={{ background: 'rgba(216, 27, 96, 0.1)' }}>
                        <div className="absolute top-0 left-0 h-full w-1/3 rounded-full scanning-bar" style={{ background: 'var(--accent-gold)', boxShadow: '0 0 10px var(--accent-gold)' }}></div>
                    </div>
                    <p className="text-gray-500 italic">Curating the perfect Infeuz Organic routine...</p>
                </div>
            );
        }

        if (currentStep === quizData.questions.length) {
            return (
                <div className="text-center stq-fade-in py-16 w-full">
                    <h3 className="text-3xl font-bold mb-6" style={{ color: '#2d3748' }}>Nearly there!</h3>
                    <p className="mb-10 text-lg" style={{ color: '#4a5568' }}>Enter your email to save your <strong>Infeuz Organic</strong> profile and unlock your recommendations.</p>
                    <form onSubmit={handleUnlockResults} className="max-w-md mx-auto pb-10">
                        <input 
                            type="email" 
                            placeholder="your@email.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 mb-6 rounded-none border border-gray-200 outline-none focus:border-pink-400 transition-colors bg-white bg-opacity-80"
                            style={{ color: '#2d3748' }}
                            required
                        />
                        <button 
                            type="submit"
                            className="w-full py-4 rounded-none font-bold uppercase tracking-widest text-sm text-white shadow-md hover:shadow-lg transition-all"
                            style={{ background: '#d81b60' }}
                        >
                            Unlock Results
                        </button>
                    </form>
                </div>
            );
        }

        if (currentStep >= 0 && currentStep < quizData.questions.length) {
            const question = quizData.questions[currentStep];
            return (
                <div className="stq-fade-in w-full">
                    <h3 className="text-xl font-medium mb-8 text-center" style={{ color: '#2d3748' }}>{question.text}</h3>
                    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto mb-12">
                        {question.options.map((opt, idx) => {
                            const isSelected = selectedOptions[currentStep] === idx;
                            return (
                                <button 
                                    key={idx}
                                    onClick={() => handleOptionSelect(idx)}
                                    className="p-4 rounded-full border text-center text-sm transition-all duration-300 w-full font-medium"
                                    style={{ 
                                        borderColor: isSelected ? '#d81b60' : 'rgba(0,0,0,0.1)',
                                        backgroundColor: 'white',
                                        color: isSelected ? '#d81b60' : '#4a5568',
                                        boxShadow: isSelected ? '0 4px 12px rgba(216, 27, 96, 0.15)' : 'none'
                                    }}
                                >
                                    {opt.text}
                                </button>
                            );
                        })}
                    </div>
                    
                    {/* Footers for Prev / Next */}
                    <div className="flex justify-between w-full mt-auto pt-6">
                        <button 
                            onClick={handlePrev}
                            className="py-3 px-8 rounded-full font-bold uppercase tracking-wider text-xs transition-all"
                            style={{ 
                                border: '1px solid rgba(0,0,0,0.15)',
                                color: '#4a5568',
                                backgroundColor: 'white'
                            }}
                        >
                            Previous
                        </button>
                        <button 
                            onClick={handleNext}
                            className="py-3 px-10 rounded-full font-bold uppercase tracking-wider text-xs transition-all shadow-md hover:shadow-lg"
                            style={{ backgroundColor: '#d81b60', color: 'white' }}
                        >
                            Next
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div className="text-center stq-fade-in flex flex-col justify-center h-full pt-8 pb-4 w-full">
                <p className="text-base leading-relaxed mb-6" style={{ color: '#2d3748' }}>Find your perfect <strong>Infeuz Organic</strong> routine based on your skin's unique needs.</p>
                <p className="text-sm text-gray-500 mb-10">Complete this short assessment to receive your personalized skin profile.</p>
                <button 
                    onClick={handleStart}
                    className="py-4 px-10 rounded-full font-bold uppercase tracking-widest text-white shadow-md transition-all mx-auto"
                    style={{ background: '#d81b60', maxWidth: '300px' }}
                >
                    Start Assessment
                </button>
            </div>
        );
    };

    return (
        <div className="min-h-screen pt-28 pb-16 flex items-start justify-center" style={{ background: '#f8f9fa' }}>
            <div className="container w-full max-w-lg mx-auto px-3">
                <div 
                    className="w-full bg-white shadow-lg rounded-2xl md:rounded-[2rem] p-5 md:p-10 flex flex-col" 
                    style={{ minHeight: '450px', border: '1px solid rgba(0,0,0,0.05)' }}
                >
                    {/* Header area matches the card style */}
                    <div className="w-full mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold luxury-font text-center mb-4" style={{ color: '#d81b60' }}>
                            Skin Profile Assessment
                        </h2>
                        
                        {(currentStep >= 0 && currentStep < quizData.questions.length && !results && !isAnalyzing) && (
                            <div className="w-full h-1 mt-4 rounded-full overflow-hidden mx-auto max-w-sm" style={{ background: 'rgba(216, 27, 96, 0.1)' }}>
                                <div 
                                    className="h-full transition-all duration-500" 
                                    style={{ 
                                        width: `${((currentStep) / quizData.questions.length) * 100}%`,
                                        background: '#d81b60'
                                    }}
                                ></div>
                            </div>
                        )}
                    </div>

                    <div className="flex-grow w-full flex flex-col items-center">
                        {renderContent()}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{__html: `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .stq-fade-in {
                    animation: fadeIn 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
                }
                @keyframes scanning {
                    0% { left: -30%; }
                    50% { left: 100%; }
                    100% { left: -30%; }
                }
                .scanning-bar {
                    animation: scanning 1.5s infinite ease-in-out;
                }
            `}} />
        </div>
    );
};

export default Assessment;
