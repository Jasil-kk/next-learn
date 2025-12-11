"use client";

import Modal from "@/components/Modal";
import Button from "@/components/ui/Button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ComprehensiveModal({ open, onClose }: ModalProps) {
  return (
    <Modal open={open} onClose={onClose} maxWidth="max-w-[1200px]">
      <div className="w-full p-5">
        <div className="w-full border-b border-[#CECECE] pb-3">
          <h5 className="text-base font-medium">
            Comprehensive Paragraph
          </h5>
        </div>
        <p className="mt-6 font-medium text-base sm:text-lg">
          Ancient Indian history spans several millennia and offers a profound
          glimpse into the origins of one of the world's oldest and most diverse
          civilizations. It begins with the Indus Valley Civilization (c.
          2500–1500 BCE), which is renowned for its advanced urban planning,
          architecture, and water management systems. Cities like Harappa and
          Mohenjo-Daro were highly developed, with sophisticated drainage
          systems and well-organized streets, showcasing the early brilliance of
          Indian civilization. The decline of this civilization remains a
          mystery, but it marks the transition to the next significant phase in
          Indian history. Following the Indus Valley Civilization, the Vedic
          Period (c. 1500–600 BCE) saw the arrival of the Aryans in northern
          India. This period is characterized by the composition of the Vedas,
          which laid the foundations of Hinduism and early Indian society.{" "}
          <br /> <br /> It was during this time that the varna system (social
          hierarchy) began to develop, which later evolved into the caste
          system. The Vedic Age also witnessed the rise of important kingdoms
          and the spread of agricultural practices across the region,
          significantly impacting the social and cultural fabric of ancient
          India. <br /> <br /> The 6th century BCE marked a turning point with
          the emergence of new religious and philosophical movements. Buddhism
          and Jainism, led by Gautama Buddha and Mahavira, challenged the
          existing Vedic orthodoxy and offered alternative paths to spiritual
          enlightenment. These movements gained widespread popularity and had a
          lasting influence on Indian society and culture. During this time, the
          kingdom of Magadha became one of the most powerful, laying the
          groundwork for future empires. <br /> <br /> The Maurya Empire (c.
          322–185 BCE), founded by Chandragupta Maurya, became the first large
          empire to unify much of the Indian subcontinent. Under Ashoka the
          Great, the empire reached its zenith, and Buddhism flourished both in
          India and abroad. Ashoka's support for non-violence, his spread of
          Buddhist teachings, and his contributions to governance and
          infrastructure had a lasting legacy on Indian history. His reign marks
          one of the earliest and most notable examples of state-sponsored
          religious tolerance and moral governance.
        </p>
        <Button
          onClick={onClose}
          fullWidth
          className="ml-auto mt-5 max-w-[350px]"
        >
          Minimize
        </Button>
      </div>
    </Modal>
  );
}
