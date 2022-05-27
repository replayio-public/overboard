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
        width: 'var(--space-6)',
        gap: 'var(--space-1)',
        borderRadius: 'var(--radii-tertiary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        animate={{
          display: 'flex',
          gap: 'inherit',
          opacity: error ? 0 : 1,
          y: error ? -24 : 0,
        }}
        transition={{
          opacity: { duration: 0.2 },
        }}
      >
        <span style={{ position: 'relative', fontWeight: 500 }}>
          <span
            style={{
              position: 'absolute',
              left: 'calc(var(--space-1) * -1)',
              fontSize: 'var(--font-size-tertiary)',
              color: 'var(--foreground-secondary)',
            }}
          >
            $
          </span>
          419
        </span>
        <span
          style={{
            display: 'block',
            flexShrink: 0,
            flexBasis: 2,
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

      <AnimatePresence>
        {error && (
          <motion.span
            style={{ position: 'absolute' }}
            initial={{ y: 24, scale: 1.05, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 24, scale: 0.99, opacity: 0 }}
            transition={{ opacity: { duration: 0.2 } }}
          >
            Error
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
