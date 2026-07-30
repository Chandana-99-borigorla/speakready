import { useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Practice = () => {
  const { mode } = useParams()
  const [topic, setTopic] = useState('')
  const [topicSubmitted, setTopicSubmitted] = useState(false)
  const [question, setQuestion] = useState('')
  const [loadingQuestion, setLoadingQuestion] = useState(false)
  const [inputType, setInputType] = useState(null)
  const [userText, setUserText] = useState('')
  const [feedback, setFeedback] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const recognitionRef = useRef(null)

  const fetchQuestion = async () => {
    if (!topic.trim()) {
      setError('Please enter a role or topic first.')
      return
    }
    setError('')
    setTopicSubmitted(true)
    setLoadingQuestion(true)
    try {
      const res = await axios.get(`http://localhost:5000/api/practice/question/${mode}`, {
        params: { topic }
      })
      setQuestion(res.data.question)
    } catch (err) {
      setError('Failed to load question. Please try again.')
    } finally {
      setLoadingQuestion(false)
    }
  }

  const startRecording = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      setError('Speech recognition is not supported in this browser. Try Chrome.')
      return
    }
    const recognition = new SpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'
    recognition.onresult = (event) => setUserText(event.results[0][0].transcript)
    recognition.onerror = (event) => {
      setError(`Speech recognition error: ${event.error}`)
      setIsRecording(false)
    }
    recognition.onend = () => setIsRecording(false)
    recognitionRef.current = recognition
    recognition.start()
    setIsRecording(true)
    setError('')
  }

  const stopRecording = () => {
    recognitionRef.current?.stop()
    setIsRecording(false)
  }

  const handleSubmit = async () => {
    if (!userText.trim()) {
      setError('Please provide some text before submitting.')
      return
    }
    setLoading(true)
    setError('')
    setFeedback('')
    try {
      const res = await axios.post('http://localhost:5000/api/practice/feedback', {
        mode,
        question,
        userText
      })
      setFeedback(res.data.feedback)
    } catch (err) {
      setError('Failed to get feedback. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  const nextQuestion = async () => {
  setInputType(null)
  setUserText('')
  setFeedback('')
  setError('')
  setLoadingQuestion(true)
  try {
    const res = await axios.get(`http://localhost:5000/api/practice/question/${mode}`, {
      params: { topic }
    })
    setQuestion(res.data.question)
  } catch (err) {
    setError('Failed to load next question. Please try again.')
  } finally {
    setLoadingQuestion(false)
  }
}

  const reset = () => {
    setInputType(null)
    setUserText('')
    setFeedback('')
    setError('')
  }

  const startOver = () => {
    setTopic('')
    setTopicSubmitted(false)
    setQuestion('')
    reset()
  }
  

  return (
    <div className="min-h-screen bg-[#0B0F19] flex flex-col items-center pt-20 px-4">
      <h1 className="text-white text-2xl font-bold mb-8 capitalize">{mode} Practice</h1>

      {!topicSubmitted && (
        <div className="w-full max-w-xl">
          <label className="text-gray-300 text-sm mb-2 block">
            What role or topic do you want to prepare for?
          </label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. HR Interview, Software Engineer, Marketing role..."
            className="w-full p-3 rounded-lg bg-[#151A28] text-white border border-gray-700 mb-4"
          />
          <button
            onClick={fetchQuestion}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Get Question
          </button>
          {error && <p className="text-red-400 mt-4">{error}</p>}
        </div>
      )}

      {topicSubmitted && loadingQuestion && (
        <p className="text-gray-400">Generating your question...</p>
      )}

      {topicSubmitted && !loadingQuestion && question && (
        <>
          <div className="w-full max-w-xl bg-[#151A28] border border-gray-700 rounded-lg p-4 mb-2">
            <p className="text-gray-300">{question}</p>
          </div>
          <button onClick={startOver} className="text-gray-500 text-xs mb-8 hover:text-gray-300">
            Change topic
          </button>

          {!inputType && (
            <div className="flex gap-6">
              <button
                onClick={() => setInputType('text')}
                className="px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
              >
                Text Based
              </button>
              <button
                onClick={() => setInputType('speech')}
                className="px-6 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
              >
                Speech Based
              </button>
            </div>
          )}

          {inputType && (
            <div className="w-full max-w-xl">
              <button onClick={reset} className="text-gray-400 mb-4 text-sm">
                ← Back to options
              </button>

              {inputType === 'text' && (
                <textarea
                  value={userText}
                  onChange={(e) => setUserText(e.target.value)}
                  placeholder="Type your response here..."
                  className="w-full h-40 p-3 rounded-lg bg-[#151A28] text-white border border-gray-700 mb-4"
                />
              )}

              {inputType === 'speech' && (
                <div className="mb-4">
                  <button
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`w-full py-3 rounded-lg font-semibold ${
                      isRecording ? 'bg-red-600' : 'bg-green-600'
                    } text-white`}
                  >
                    {isRecording ? 'Stop Recording' : 'Start Recording'}
                  </button>
                  {userText && (
                    <p className="text-gray-300 mt-3 p-3 bg-[#151A28] rounded-lg">
                      Transcript: {userText}
                    </p>
                  )}
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Getting Feedback...' : 'Submit'}
              </button>

              {error && <p className="text-red-400 mt-4">{error}</p>}

              {feedback && (
                <div className="mt-6 p-4 bg-[#151A28] rounded-lg border border-gray-700">
                  <h2 className="text-white font-semibold mb-2">AI Feedback</h2>
                  <p className="text-gray-300">{feedback}</p>
                   <button
      onClick={nextQuestion}
      className="mt-4 w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700"
    >
      Next Question →
    </button>
                </div>
              )}
              
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Practice