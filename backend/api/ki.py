"""
KI-MODEL
"""

class KI:
    @staticmethod
    def create_answer(prompt):
        """
        Update the dictionary at answer and simply enter the prompt.
        You would then simply have to insert the correct answer here.

        Args: dict: prompt from Frontend
        Returns dict: modified dict with the correct answer
        """
        prompt['answer'] = prompt['prompt']
        return prompt
