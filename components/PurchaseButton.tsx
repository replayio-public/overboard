import { AnimatePresence, motion } from 'framer-motion'

export function PurchaseButton({ hasError }: { hasError?: boolean }) {
  return (
    <motion.button
      disabled={hasError}
      whileTap={{ scale: hasError ? undefined : 0.99 }}
      animate={{
        background: hasError ? 'var(--background-error)' : 'var(--background)',
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
        cursor: hasError ? 'not-allowed' : 'pointer',
      }}
    >
      <motion.div
        animate={{
          display: 'flex',
          gap: 'inherit',
          opacity: hasError ? 0 : 1,
          y: hasError ? -24 : 0,
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
          y: hasError ? -24 : 0,
          opacity: hasError ? 0 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
        }}
      >
        Buy Now
      </motion.span>

      <AnimatePresence>
        {hasError && (
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
