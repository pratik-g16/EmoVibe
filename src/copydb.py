import pymongo
from pymongo import MongoClient
import pandas as pd
import json
data=pd.read_csv('C:/Users/HP/Desktop/ProjectSem6/VSC/sentiment-analysis/src/songData.csv',delimiter=",")
# print(data['Happy'])
data.dropna(inplace=True)
# print(data['HAPPY'])
# print(data.head())
HAPPY=[] 
WORRY=[]
SURPRISE=[]
RELIEF=[]
NEUTRAL=[]
SADNESS=[]
FEAR=[]
LOVE=[]
ANGER=[]

list1=data.head(0)
print(list1)

songs={}
# print(data['HAPPY'][0])
# print(len(data['HAPPY']))
for i in range(0,len(data['HAPPY'])*2,2):
    
    # print(i)
    temp={}
    temp['name']=data['HAPPY'][i]
    temp['emotion']='HAPPY'
    temp['link']=data['HAPPYLINK'][i] 
    HAPPY.append(temp)



for i in range(0,len(data['WORRY'])*2,2):
    # print(i)
    temp={}
    temp['name']=data['WORRY'][i]
    temp['emotion']='WORRY'
    temp['link']=data['WORRYLINK'][i] 
    WORRY.append(temp)



for i in range(0,len(data['NEUTRAL'])*2,2):
    # print(i)
    temp={}
    temp['name']=data['NEUTRAL'][i]
    temp['emotion']='NEUTRAL'
    temp['link']=data['NEUTRALLINK'][i] 
    NEUTRAL.append(temp)


for i in range(0,len(data['FEAR'])*2,2):
    # print(i)
    temp={}
    temp['name']=data['FEAR'][i]
    temp['emotion']='FEAR'
    temp['link']=data['FEARLINK'][i] 
    FEAR.append(temp)



for i in range(0,len(data['ANGER'])*2,2):
    # print(i)
    temp={}
    temp['name']=data['ANGER'][i]
    temp['emotion']='ANGER'
    temp['link']=data['ANGERLINK'][i] 
    ANGER.append(temp)


for i in range(0,len(data['SADNESS'])*2,2):
    # print(i)
    temp={}
    temp['name']=data['SADNESS'][i]
    temp['emotion']='SADNESS'
    temp['link']=data['SADLINK'][i] 
    SADNESS.append(temp)

for i in range(0,len(data['SURPRISE'])*2,2):
    # print(i)
    temp={}
    temp['name']=data['SURPRISE'][i]
    temp['emotion']='SURPRISE'
    temp['link']=data['SURPRISELINK'][i] 
    SURPRISE.append(temp)

for i in range(0,len(data['RELIEF'])*2,2):
    # print(i)
    temp={}
    temp['name']=data['RELIEF'][i]
    temp['emotion']='RELIEF'
    temp['link']=data['RELIEFLINK'][i] 
    RELIEF.append(temp)

for i in range(0,len(data['LOVE'])*2,2):
    # print(i)
    temp={}
    temp['name']=data['LOVE'][i]
    temp['emotion']='LOVE'
    temp['link']=data['LOVELINK'][i] 
    LOVE.append(temp)

print(LOVE)

# class MongoDB(object):
#     def __init__(sel,dbName=None,collentionName=None):
#         self.dbName=dbName
#         self.collectionName:collectionName
#         self.client=MonoClient('loclalhost')