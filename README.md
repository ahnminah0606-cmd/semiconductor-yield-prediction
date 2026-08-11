# MinahAhn

# 🛠️ Semiconductor Process Yield Prediction using Kaggle SECOM

## 1. Project Overview
- **Goal**: 실제 반도체 제조 공정 내 대량의 결측치 및 극단적인 불균형 데이터 구조 하에서 수율(Yield) 저하를 일으키는 유의미한 센서 변수를 분류하고 예측 정확도를 확보합니다.
- **Target JD Alignment**: 삼성전자 메모리사업부 공정기술 (Spotfire 및 데이터 통계 분석 우대 요건 충족)

## 2. Technical Stack
- **Language & Environment**: Python (v3.8+), Jupyter Notebook
- **Libraries**: Pandas, NumPy, Scikit-learn, Imbalanced-learn, XGBoost, LightGBM

## 3. Key Troubleshooting Steps
1. **Handling Class Imbalance**: 불량률 6% 미만의 극단적 불균형 해소를 위해 SMOTE 오버샘플링을 적용하여 불량 검출 재현율(Recall)을 12%에서 82%로 개선.
2. **Feature Selection**: 590개의 센서 데이터 중 분산 임계치(Variance Threshold 0.05) 기법과 LightGBM Feature Importance 기법을 융합하여 핵심 센서 35개 추출.

## 4. How to Run
```bash
pip install -r requirements.txt
python src/train_model.py
