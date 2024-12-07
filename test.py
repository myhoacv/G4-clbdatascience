import pandas as pd

# Tạo DataFrame
data = {
    'Tên': ['An', 'Bình', 'Chi'],
    'Tuổi': [23, 25, 22],
    'Điểm': [85, 90, 95]
}
df = pd.DataFrame(data)

# Hiển thị DataFrame
print(df)

# Truy cập một cột
print(df['Tên'])

# Tính trung bình điểm
print("Điểm trung bình:", df['Điểm'].mean())
print("Quang Dũng")

