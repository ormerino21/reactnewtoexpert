import { useState } from 'react'
import './App.css'
import { useCharacter } from './hooks/useCharacter';


function App() {
  const [input, setInput] = useState("1");
  const id = Number.isNaN(Number(input)) ? null : Number(input);

  const {data, error, loading, refetch, cancel} = useCharacter(id);

  return (
    <div style={{ maxWidth: 680, margin: '2rem auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Rick & Morty - Character Finder</h1>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16 }}>
        <label htmlFor='charId'>Character ID:</label>
        <input
          id='charId'
          type='number'
          min={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{padding: 8, width: 120}}
        />
        <button onClick={refetch} disabled={loading || id == null} style={{ padding: '8px 12px' }}>
          Buscar
        </button>
        <button onClick={cancel} disabled={!loading} style={{ padding: '8px 12px' }}>
          Cancelar
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && (
        <div style={{ color: 'crimson', marginTop: 8 }}>
          <strong>Error:</strong> {error.message} {error.status ? `HTTP ${error.status}` : ''}
        </div>
      )}

      {data && !loading && (
        <article style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16, marginTop: 16 }}>
          <img
            src={data.image}
            alt={data.name}
            width={160}
            height={160}
            style={{ borderRadius: 8, objectFit: 'cover' }}
          />
          <div>
            <h2 style={{ margin: '0 0 8px' }}>{data.name}</h2>
            <p style={{ margin: 0 }}>
              <strong>Status:</strong> {data.status} · <strong>Species:</strong> {data.species} ·{' '}
              <strong>Gender:</strong> {data.gender}
            </p>
            <p style={{ margin: '8px 0 0' }}>
              <strong>Origin:</strong> {data.origin?.name} · <strong>Location:</strong> {data.location?.name}
            </p>
          </div>
        </article>
      )}
    </div>
  )
}

export default App
