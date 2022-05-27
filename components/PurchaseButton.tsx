import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function PurchaseButton() {
  // TODO: move this state to onSubmit handler and pass back down
  const [error, setError] = useState(false)

  return (
    <motion.button
      onClick={() => setError(!error)}
      whileTap={{ scale: 0.99 }}
      animate={{
        background: error ? 'var(--background-error)' : 'var(--background)',
      }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.8rem',
        borderRadius: '2rem',
        width: 248,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        animate={{
          display: 'flex',
          gap: 'inherit',
          opacity: error ? 0 : 1,
          y: error ? -20 : 0,
        }}
        transition={{
          opacity: { duration: 0.2 },
        }}
      >
        <span style={{ position: 'relative', fontWeight: 500 }}>
          <span
            style={{
              position: 'absolute',
              left: '-0.8rem',
              fontSize: '1rem',
              color: 'var(--foreground-secondary)',
            }}
          >
            $
          </span>
          419
        </span>
        <span
          style={{
            flexShrink: 0,
            flexBasis: 2,
            height: '1.6rem',
            backgroundColor: 'var(--foreground-secondary)',
          }}
        />
      </motion.div>

      <motion.span
        animate={{
          y: error ? -24 : 0,
          opacity: error ? 0 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
        }}
      >
        Buy Now
      </motion.span>

      <motion.span
        style={{ position: 'absolute' }}
        animate={{
          y: error ? 0 : 24,
          opacity: error ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.2 },
        }}
      >
        Error
      </motion.span>
    </motion.button>
  )
}
