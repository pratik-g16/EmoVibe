import pandas as pd
import numpy as np
import speech_recognition as sr   
import time 
import pickle
import pickle
import os
import numpy as np
from sklearn.preprocessing import MultiLabelBinarizer
from tensorflow.keras.preprocessing import text

class CustomModelPrediction(object):

  def __init__(self, model, processor):
    self._model = model
    self._processor = processor
  
  def predict(self, instances, **kwargs):
    preprocessed_data = self._processor.transform_text(instances)
    predictions = self._model.predict(preprocessed_data)
    return predictions.tolist()

  @classmethod
  def from_path(cls, model_dir):
    import tensorflow.keras as keras
    model = keras.models.load_model(
      os.path.join(model_dir,'sentiment_model.h5'))
    with open(os.path.join(model_dir, 'processor_state.pkl'), 'rb') as f:
      processor = pickle.load(f)

    return cls(model, processor)

class TextPreprocessor(object):
  def __init__(self, vocab_size):
    self._vocab_size = vocab_size
    self._tokenizer = None
  
  def create_tokenizer(self, text_list):
    tokenizer = text.Tokenizer(num_words=self._vocab_size)
    tokenizer.fit_on_texts(text_list)
    self._tokenizer = tokenizer

  def transform_text(self, text_list):
    text_matrix = self._tokenizer.texts_to_matrix(text_list)
    return text_matrix

# #using speech_recognition library in python for converting speech to text
r = sr.Recognizer()  
try: 
# use the microphone as source for input. 
    with sr.Microphone() as source: 
        #taking 1 second to recognize the background noise for clearer and more effective audio to text translation 
        r.adjust_for_ambient_noise(source, duration=1) 
        print("Getting an idea of your background noise")
        time.sleep(1.1)
        #listens for the user's input  
        print("Speak now")
        audio = r.listen(source)        
        # Using ggogle to recognize audio 
        text = r.recognize_google(audio) 
        # MyText = r.recognize_sphinx(audio) 
        text = text.lower() 
        print(text)  
except sr.RequestError as e: 
        text=""
        print("Error") 
except sr.UnknownValueError: 
        text=""
        print("unknown error")

test_requests=[
    text
]

tag_encoder = MultiLabelBinarizer()
# tags_encoded = tag_encoder.fit_transform(sentiments_encoded)
# num_tags = len(tags_encoded[0])
tag_encoder.classes_=['anger','fear','happiness','happy','love','neutral' ,'relief' ,'sadness',
 'surprise' ,'worry']
# print(tag_encoder.classes_)
# print(tags_encoded[0])

# Make a prediction on our local model
# from model_prediction import CustomModelPrediction
def predict_emotion():
    classifier = CustomModelPrediction.from_path('.')
    results = classifier.predict(test_requests)
    emotion=[]
    for i in range(len(results)): 
        for idx,val in enumerate(results[i]): 
            if val > 0.1: 
                 emotion.append([val,tag_encoder.classes_[idx]]) 
    emotion.sort(reverse=True)
    return emotion[:2]

def find():
    emotion1,emotion2=predict_emotion()
    emotion1=emotion1[1]
    emotion2=emotion2[1] 
    print(emotion1,emotion2) 

find()