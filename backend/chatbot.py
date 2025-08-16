import os
from dotenv import load_dotenv
from langchain_community.llms import Ollama
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.chains.retrieval_qa.base import RetrievalQA
 
load_dotenv()
Vector_path="D:\\TINT HACKATHON\\Techno-Buddy\\backend\\Vector_store"
GEMINI_API_KEY=os.getenv("GEMINI_API_KEY")

def vector_store():
    try:
        embedings=HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
        return FAISS.load_local(
            Vector_path,
            embeddings=embedings,
            allow_dangerous_deserialization=True

        )
    except Exception as e:
        print(f"Cannot load vector store {str(e)}")
        return None
    

def create_qa_chain():

    vectorstore=vector_store()
    llm=Ollama(model="llama3")

    return RetrievalQA.from_chain_type(
        llm=llm,
        retriever=vectorstore.as_retriever(search_type="similarity",search_kwargs={"k":5}),
        chain_type="stuff"
    )



qa_chain=create_qa_chain()

def get_ans(query:str)->str:
    return qa_chain.run(query)



