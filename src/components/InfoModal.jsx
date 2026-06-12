// ./src/components/InfoModal.jsx
import { useLanguage } from "../context/LanguageContext";

function InfoModal({ isOpen, onClose }) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-bg max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-gold/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-bg border-b border-gold/30 p-6 flex justify-between items-center rounded-t-2xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gold">
            {t.modalTitle}
          </h2>
          <button
            onClick={onClose}
            className="text-3xl text-gray-400 hover:text-gold transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* 1. Origin */}
          <div className="bg-black p-6 rounded-xl border border-gold/20">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🏔️</div>
              <div className="flex-1">
                <h3 className="font-bold text-gold text-lg mb-3">
                  {t.infoOriginTitle}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.infoOriginDesc}
                </p>
              </div>
            </div>
          </div>

          {/* 2. Wild Harvested */}
          <div className="bg-black p-6 rounded-xl border border-gold/20">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🌿</div>
              <div className="flex-1">
                <h3 className="font-bold text-gold text-lg mb-3">
                  {t.infoWildTitle}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.infoWildDesc}
                </p>
              </div>
            </div>
          </div>

          {/* 3. Purity */}
          <div className="bg-black p-6 rounded-xl border border-gold/20">
            <div className="flex items-start gap-4">
              <div className="text-4xl">✨</div>
              <div className="flex-1">
                <h3 className="font-bold text-gold text-lg mb-3">
                  {t.infoPurityTitle}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.infoPurityDesc}
                </p>
              </div>
            </div>
          </div>

          {/* 4. Important Difference */}
          <div className="bg-linear-to-br from-gold/10 to-gold/5 p-6 rounded-xl border-2 border-gold/40">
            <div className="flex items-start gap-4">
              <div className="text-4xl">⭐</div>
              <div className="flex-1">
                <h3 className="font-bold text-gold text-lg mb-3">
                  {t.infoDifferenceTitle}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.infoDifferenceDesc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-bg border-t border-gold/30 p-6 rounded-b-2xl">
          <button
            onClick={onClose}
            className="w-full bg-gold text-primary py-3 rounded-lg font-bold hover:bg-lightGold transition"
          >
            {t.btnClose}
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
